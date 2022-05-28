import {
  NativeToken,
  Network,
  ChainName,
  Profile,
  Token,
  Deposit,
  Withdraw,
  TokenSymbol,
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
  getUsers(): Promise<number>;
  getDeposits(): Promise<Deposit[]>;
  getWithdrawals(): Promise<Withdraw[]>;
  approveDeposit(amount: number, symbol: TokenSymbol): Promise<Deposit>;
  deposit(deposit: Deposit): Promise<Deposit>;
}
