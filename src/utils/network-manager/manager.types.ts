import { IAdapter } from './adapters';

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
