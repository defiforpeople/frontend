import { IAdapter } from './adapters';
import { ContractTransaction } from 'ethers';

export type TokenSymbol =
  | 'weth'
  | 'eth'
  | 'avax'
  | 'wavax'
  | 'bnb'
  | 'ftm'
  | 'matic';

export type NativeToken = {
  balance?: number;
  symbol: TokenSymbol;
  decimals: number;
};

export type Token = NativeToken & {
  address: string;
};

export type ChainName =
  | 'eth'
  | 'goerli'
  | 'rinkeby'
  | 'polygon'
  | 'bsc'
  | 'avalanche'
  | 'avalanche testnet'
  | 'fantom';

export type Network = {
  name: string;
  chainName: ChainName;
  chainId: string;
  dev: boolean;
  nativeToken: NativeToken;
  strategies: {
    [name: string]: {
      name: string;
      address: string;
    };
  };
};

export interface INetworkManager {
  get chainName(): ChainName;
  getAdapter(): IAdapter;
  switchAdapter(adapter: IAdapter): void;
  switchNetwork(name: ChainName): Promise<void>;
  listNetworks(): { [name: string]: Network };
  listTokens(): { [name: string]: { [name: string]: Token } };
}

export type Profile = {
  address: string;
  ens: string;
};

export type Deposit = {
  amount: number;
  timestamp: number;
  symbol?: string;
  quotas?: number;
  approveTx?: ContractTransaction;
  depositTx?: ContractTransaction;
};

export type Withdraw = {
  amount: number;
  timestamp: number;
  quotas?: number;
  tx?: ContractTransaction;
};

export type Strategy = {
  name: string;
  addr: string;
};
