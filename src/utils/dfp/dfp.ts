import { INetworkManager, NetworkManager, Profile } from '../network-manager';
import { Deposit, IDFP, Withdraw } from './dfp.types';

export default class DFP implements IDFP {
  public _manager: INetworkManager;

  constructor() {
    this._manager = new NetworkManager();
  }

  get manager(): INetworkManager {
    return this._manager;
  }

  public strategyRecursiveFarminDeposit(
    token: string,
    amount: number,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public strategyRecursiveFarminWithdraw(
    token: string,
    amount: number,
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public getDeposits(wallet: string): Promise<Deposit[]> {
    throw new Error('Method not implemented.');
  }

  public getWithdraw(wallet: string): Promise<Withdraw[]> {
    throw new Error('Method not implemented.');
  }

  public getProfile(wallet: string): Promise<Profile> {
    throw new Error('Method not implemented.');
  }
}
