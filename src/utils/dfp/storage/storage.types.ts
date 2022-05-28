import { Deposit, Strategy } from '../dfp.types';

export interface IDFPStorage {
  listStrategies(): Promise<Strategy[]>;
  // getUserDeposits(wallet: string): Promise<Deposit[]>;
}
