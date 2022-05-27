import { IAdapter } from './adapters';
import { ContractTransaction, ContractReceipt } from 'ethers';

//  token_address: string;
//  name: string;
//  logo?: string;
//  thumbnail?: string;
export type NativeToken = {
  balance?: number;
  symbol: string;
  decimals: number;
};

export type Token = NativeToken & {
  address: string;
};

export type ChainName =
  | 'eth'
  | 'goerli'
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
};

export interface INetworkManager {
  get chainName(): ChainName;
  getAdapter(): IAdapter;
  switchAdapter(adapter: IAdapter): void;
  switchNetwork(name: ChainName): Promise<void>;
  listNetworks(): { [name: string]: Network };
  listTokens(): { [name: string]: Token };
}

export type Profile = {
  address: string;
  ens: string;
  // networks: Network[];
};

export type Deposit = {
  amount: number;
  timestamp: number;
  quotas?: number;
  tx?: ContractTransaction;
};

export type Withdraw = {};

export type Strategy = {
  name: string;
  addr: string;
};
