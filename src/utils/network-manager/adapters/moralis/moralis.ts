import Moralis from 'moralis';
import { networks } from '../../manager.constants';
import {
  NativeToken,
  Network,
  ChainName,
  Profile,
  Token,
  Withdraw,
  Deposit,
} from '../../manager.types';
import { AdapterName, IAdapter } from '../adapter.types';
import { Strategy__factory, Strategy } from '../../../../typechain';

export default class MoralisAdapter implements IAdapter {
  private _name: AdapterName;
  private serverUrl: string;
  private appUrl: string;
  private contractAddr: string;
  private _network: Network;
  private ready: boolean;

  constructor(serverUrl: string, appId: string, contractAddr: string) {
    this._name = 'moralis';
    this._network = undefined!;
    this.ready = false;

    this.serverUrl = serverUrl;
    this.appUrl = appId;
    this.contractAddr = contractAddr;
  }

  public async initAdapter(): Promise<void> {
    try {
      await Moralis.start({
        serverUrl: this.serverUrl,
        appId: this.appUrl,
      });

      this.ready = true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async switchNetwork(name: ChainName): Promise<void> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      await Moralis.enableWeb3();

      const network = networks[name];
      await Moralis.switchNetwork(network.chainId);

      this._network = network;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public get network(): Network {
    return this._network;
  }

  public get name(): AdapterName {
    return this._name;
  }

  public async getNativeToken(): Promise<NativeToken> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      const profile = await this.getProfile();
      const { chainName, nativeToken } = this.network;

      const res = await Moralis.Web3API.account.getNativeBalance({
        chain: chainName,
        address: profile.address,
      });

      return {
        balance: Number(res.balance),
        ...nativeToken,
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getTokens(): Promise<Token[]> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      const profile = await this.getProfile();
      const { chainName } = this.network;

      const res = await Moralis.Web3API.account.getTokenBalances({
        chain: chainName,
        address: profile.address,
      });

      const tokens = res.map(
        ({ balance, symbol }) =>
          ({
            balance: Number(balance),
            symbol,
          } as Token),
      );

      return tokens;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public isAuthenticated(): boolean {
    try {
      if (!this.ready) {
        return false;
      }

      const user = Moralis.User.current();
      return !user ? false : true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async login(signMessage: string): Promise<Profile> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      if (!this.isAuthenticated()) {
        const user = await Moralis.authenticate({
          signingMessage: signMessage,
        });

        console.log('logged in user:', user);
      }

      const profile: Profile = await this.getProfile();
      return profile;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      await Moralis.User.logOut();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getProfile(): Promise<Profile> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      const user = Moralis.User.current();
      const address = user!.get('ethAddress');

      const profile = {
        address,
        ens: '',
      } as Profile;

      try {
        const { name: ensName } = await Moralis.Web3API.resolve.resolveAddress({
          address,
        });
        profile.ens = ensName;
      } catch (err) {
        console.warn('error ens resolveAddress, err=', err);
      }

      return profile;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getUsers(): Promise<number> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      const users: number = await Moralis.Cloud.run('get_nr_users');

      return users;
    } catch (err) {
      console.log('entro en el error');
      console.log(err);
      throw err;
    }
  }

  public async getDeposits(): Promise<Deposit[]> {
    try {
      if (!this.ready) {
        await this.initAdapter();
      }

      const profile = await this.getProfile();

      const q = new Moralis.Query('DepositEvents');
      q.equalTo('userAddr', profile.address);
      const results = await q.find();

      return results.map((res) => {
        const timestamp = new Date(res.get('block_timestamp')).getTime();

        return {
          amount: Number(res.get('amount')),
          timestamp,
        };
      });
    } catch (err) {
      console.log('entro en el error');
      console.log(err);
      throw err;
    }
  }

  public async getWithdraw(): Promise<Withdraw[]> {
    return [];
  }

  public async deposit(amount: number): Promise<Deposit> {
    // validate inputs
    const { balance } = await this.getNativeToken();
    if (amount < 0 || amount > balance!) {
      throw new Error('invalid amount');
    }

    // prepare contract
    const provider = await Moralis.enableWeb3();
    const ethers = Moralis.web3Library;
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      this.contractAddr,
      Strategy__factory.abi,
      signer,
    ) as Strategy;

    // make transaction
    const tx = await contract.deposit(
      ethers.utils.parseEther(amount.toString()),
    );

    return {
      amount,
      timestamp: new Date().getTime(),
      tx,
    };
  }
}
