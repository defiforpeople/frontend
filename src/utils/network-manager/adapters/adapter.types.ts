import {
  Network,
  ChainName,
  Profile,
  Token,
  Deposit,
  Withdraw,
  TokenSymbol,
  DFPStrategy,
  StrategiesByNetworks,
} from '../manager.types';

export type AdapterName = 'moralis' | 'web3' | 'ethers.js' | 'dfp' | 'none';

export interface IAdapter {
  get network(): Network;
  get name(): AdapterName;
  isAuthenticated(): boolean;
  login(signMessage: string): Promise<Profile>;
  logout(): Promise<void>;
  getProfile(): Promise<Profile>;
  getNativeToken(): Promise<Token>;
  getTokens(): Promise<Token[]>;
  switchNetwork(name: ChainName): Promise<void>;
  getUsers(): Promise<number>;
  getDeposits(): Promise<Deposit[]>;
  getWithdrawals(): Promise<Withdraw[]>;
  approveDeposit(amount: number, symbol: TokenSymbol): Promise<Deposit>;
  approveDepositAave(amount: number, symbol: TokenSymbol): Promise<Deposit>;
  depositAave(amount: number, symbol: TokenSymbol): Promise<Deposit>;
  deposit(deposit: Deposit): Promise<Deposit>;
  listStrategies(): Promise<DFPStrategy[]>;
  listStrategiesByNetworks(): Promise<StrategiesByNetworks>;
}
