import Moralis from 'moralis';
import { networks } from '../../manager.constants';
import {
  NativeToken,
  Network,
  ChainName,
  Profile,
  Token,
} from '../../manager.types';
import { AdapterName, IAdapter } from '../adapter.types';

export default class MoralisAdapter implements IAdapter {
  private _name: AdapterName;
  private serverUrl: string;
  private appUrl: string;
  private _network: Network;
  private ready: boolean;

  constructor(serverUrl: string, appId: string) {
    this._name = 'moralis';
    this._network = undefined!;
    this.ready = false;

    this.serverUrl = serverUrl;
    this.appUrl = appId;
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

      console.log('getNativeBalance', res);

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

      console.log(3);
      const profile = await this.getProfile();
      const { chainName } = this.network;

      const res = await Moralis.Web3API.account.getTokenBalances({
        chain: chainName,
        address: profile.address,
      });

      console.log('getTokenBalances', res);

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
}
