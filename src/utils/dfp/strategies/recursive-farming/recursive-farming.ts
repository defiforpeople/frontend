import { IRecursiveFarming } from './recursive-farming.types';

export default class RecursiveFarming implements IRecursiveFarming {
  constructor() {}

  public deposit(token: string, amount: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public withdraw(token: string, amount: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public getQuotaQty(tokenAddr: string, amount: number): Number {
    throw new Error('Method not implemented.');
  }

  public getQuotaPrice(): number {
    throw new Error('Method not implemented.');
  }
}
