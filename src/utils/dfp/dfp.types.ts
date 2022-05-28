import { Profile } from '../network-manager';

export interface IDFP {
  getDeposits(wallet: string): Promise<Deposit[]>;
  getWithdraw(wallet: string): Promise<Withdraw[]>;
  getProfile(wallet: string): Promise<Profile>;
}

export type Deposit = {
  amount: number;
  quotas: number;
  timestamp: Date;
};

export type Withdraw = {};

export type Strategy = {
  name: string;
  addr: string;
};
