import { IStrategy } from '../strategies.types';

export interface IRecursiveFarming extends IStrategy {
  deposit(token: string, amount: number): Promise<void>;
  withdraw(token: string, amount: number): Promise<void>;
}
