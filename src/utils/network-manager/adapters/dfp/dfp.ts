// import { Strategy } from '../../../../typechain';
import { networks } from '../../manager.constants';
import {
  Network,
  ChainName,
  Profile,
  Token,
  Withdraw,
  Deposit,
  TokenSymbol,
  DFPStrategy,
  StrategiesByNetworks,
} from '../../manager.types';
import { AdapterName, IAdapter } from '../adapter.types';
// import {
//   StrategyRecursiveFarming__factory,
//   StrategyRecursiveFarming,
//   IWETH__factory,
//   IWETH,
// } from '../../../../typechain';

declare global {
  interface Window {
    ethereum: any;
  }
}

export default class DfpAdapter implements IAdapter {
  private _name: AdapterName;
  private _apiURL: string;
  private _network: Network;
  private _ready: boolean;
  private _profile: Profile;

  constructor(apiURL: string) {
    this._apiURL = apiURL;
    this._name = 'dfp';
    this._network = undefined!;
    this._ready = false;

    this._profile = undefined!;
  }

  private checkMetamaskAvailability(): boolean {
    const { ethereum } = window;
    return !ethereum ? false : true;
  }

  public async initAdapter(): Promise<void> {
    try {
      if (!this.checkMetamaskAvailability()) {
        throw new Error('Error: Metamask is not available');
      }

      this._ready = true;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async switchNetwork(name: ChainName): Promise<void> {
    try {
      if (!this._ready) {
        await this.initAdapter();
      }

      // await Moralis.enableWeb3();

      const network = networks[name];

      // await Moralis.switchNetwork(network.chainId);

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

  public async getTokens(): Promise<Token[]> {
    try {
      if (!this._ready) {
        await this.initAdapter();
      }

      const [wallet] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!wallet || wallet === '') {
        throw new Error('Metamask: not wallet address found');
      }

      if (!this._network) {
        throw new Error('Adapter: network is not defined');
      }

      const response = await fetch(
        `${this._apiURL}/api/v1/tokens/${wallet}?network=${this._network}`,
      );
      const {
        data: { tokens },
      }: { data: { tokens: Token[] } } = await response.json();

      console.log('GetTokens(): ', tokens);

      return tokens;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async getNativeToken(): Promise<Token> {
    try {
      if (!this._ready) {
        await this.initAdapter();
      }

      const [wallet] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!wallet || wallet === '') {
        throw new Error('Metamask: not wallet address found');
      }

      if (!this._network) {
        throw new Error('Adapter: network is not defined');
      }

      const response = await fetch(
        `${this._apiURL}/api/v1/native-token/${wallet}?network=${this._network}`,
      );
      const {
        data: { token },
      }: { data: { token: Token } } = await response.json();

      console.log('GetNativeToken(): ', token);

      return token;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public isAuthenticated(): boolean {
    return !this._profile ? false : true;
  }

  public async login(signMessage: string): Promise<Profile> {
    try {
      if (!this._ready) {
        await this.initAdapter();
      }

      const [wallet] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (!wallet || wallet === '') {
        throw new Error('Metamask: not wallet address found');
      }

      if (!this._network) {
        throw new Error('Adapter: network is not defined');
      }

      const response = await fetch(
        `${this._apiURL}/api/v1/wallets/${wallet}/login?network=${this._network}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      );
      const { data }: { data: Profile } = await response.json();
      this._profile = data;

      console.log('Login: ', data);

      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    this._profile = undefined!;
    this._ready = false;

    return;
  }

  public async getProfile(): Promise<Profile> {
    if (!this._profile) {
      throw new Error('Adapter: profile is not defined');
    }

    return this._profile;
  }

  public async getUsers(): Promise<number> {
    try {
      if (!this._ready) {
        await this.initAdapter();
      }

      if (!this._network) {
        throw new Error('Adapter: network is not defined');
      }

      const response = await fetch(
        `${this._apiURL}/api/v1/wallets?network=${this._network.chainName}`,
      );

      const { meta }: { meta: { count: number } } = await response.json();

      console.log('Get Users: ', meta);

      return meta?.count;
    } catch (err) {
      console.log('Adapter: Error getUsers()');
      console.log(err);
      throw err;
    }
  }

  public async getDeposits(): Promise<Deposit[]> {
    return [];

    // try {
    //   if (!this._ready) {
    //     await this.initAdapter();
    //   }
    //   const profile = await this.getProfile();
    //   const q = new Moralis.Query('DepositEventssss');
    //   q.equalTo('userAddr', profile.address);
    //   const results = await q.find();
    //   return results.map((res) => {
    //     const timestamp = new Date(res.get('block_timestamp')).getTime();
    //     return {
    //       amount: Number(res.get('amount')),
    //       timestamp,
    //     };
    //   });
    // } catch (err) {
    //   console.log('entro en el error');
    //   console.log(err);
    //   throw err;
    // }
  }

  public async getWithdrawals(): Promise<Withdraw[]> {
    return [];

    // try {
    //   if (!this._ready) {
    //     await this.initAdapter();
    //   }
    //   const profile = await this.getProfile();
    //   const q = new Moralis.Query('WithdrawEventssss');
    //   q.equalTo('userAddr', profile.address);
    //   const results = await q.find();
    //   return results.map((res) => {
    //     const timestamp = new Date(res.get('block_timestamp')).getTime();
    //     return {
    //       amount: Number(res.get('amount')),
    //       timestamp,
    //     };
    //   });
    // } catch (err) {
    //   console.log('entro en el error');
    //   console.log(err);
    //   throw err;
    // }
  }

  public async approveDeposit(
    amount: number,
    symbol: TokenSymbol,
  ): Promise<Deposit> {
    return {} as Deposit;

    // // validate inputs
    // const { balance } = await this.getNativeToken();
    // if (amount < 0 || amount > balance!) {
    //   throw new Error('invalid amount');
    // }
    // // get token address
    // const tokenAddr = tokens[this.network.chainName][symbol].address;
    // // prepare provider
    // const provider = await Moralis.enableWeb3();
    // const ethers = Moralis.web3Library;
    // const signer = provider.getSigner();
    // // prepare weth contract
    // const wrapContract = new ethers.Contract(
    //   tokenAddr,
    //   IWETH__factory.abi,
    //   signer,
    // ) as IWETH;
    // console.log(1111111);
    // console.log(1111111);
    // console.log(1111111);
    // console.log(1111111);
    // console.log(1111111, tokenAddr);
    // // get strategy address
    // const contractAddr = this.network.strategies['recursive_farming'].address;
    // // parse amount to bignumber
    // const parsedAmount = ethers.utils.parseEther(amount.toString());
    // // make approve weth contract to strategy addres
    // const tx = await wrapContract.approve(contractAddr, parsedAmount);
    // console.log(222222);
    // console.log(222222);
    // console.log(222222);
    // console.log(222222);
    // console.log(222222, contractAddr, parsedAmount);
    // return {
    //   amount,
    //   timestamp: new Date().getTime(),
    //   approveTx: tx,
    // };
  }

  public async deposit(deposit: Deposit): Promise<Deposit> {
    return {} as Deposit;
    // // get strategy address
    // const contractAddr = this.network.strategies['recursive_farming'].address;
    // // prepare provider
    // const provider = await Moralis.enableWeb3();
    // const ethers = Moralis.web3Library;
    // const signer = provider.getSigner();
    // // parse amount to bignumber
    // const parsedAmount = ethers.utils.parseEther(deposit.amount.toString());
    // console.log('PARSED AMOUNT');
    // console.log('PARSED AMOUNT');
    // console.log('PARSED AMOUNT');
    // console.log('PARSED AMOUNT');
    // console.log('PARSED AMOUNT', parsedAmount, contractAddr);
    // // prepare strategy contract
    // const strategyContract = new ethers.Contract(
    //   contractAddr,
    //   StrategyRecursiveFarming__factory.abi,
    //   signer,
    // ) as StrategyRecursiveFarming;
    // // make transaction
    // const tx = await strategyContract.deposit(parsedAmount);
    // return {
    //   ...deposit,
    //   depositTx: tx,
    // };
  }

  public async listStrategies(): Promise<DFPStrategy[]> {
    try {
      const response = await fetch(`${this._apiURL}/api/v1/strategies`);
      const {
        data,
      }: {
        data: {
          strategies: DFPStrategy[];
        };
      } = await response.json();

      return data?.strategies;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  public async listStrategiesByNetworks(): Promise<StrategiesByNetworks> {
    try {
      const response = await fetch(
        `${this._apiURL}/api/v1/strategies-by-networks`,
      );
      const {
        data,
      }: {
        data: {
          strategies: {
            [key: string]: DFPStrategy[];
          };
        };
      } = await response.json();

      return data?.strategies;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
