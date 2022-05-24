import {
  NativeToken,
  Network,
  ChainName,
  Profile,
  Token,
} from '../manager.types';

export type AdapterName = 'moralis' | 'web3' | 'ethers.js' | 'none';

export interface IAdapter {
  get network(): Network;
  get name(): AdapterName;
  isAuthenticated(): boolean;
  login(signMessage: string): Promise<Profile>;
  logout(): Promise<void>;
  getProfile(): Promise<Profile>;
  getNativeToken(): Promise<NativeToken>;
  getTokens(): Promise<Token[]>;
  switchNetwork(name: ChainName): Promise<void>;
}
