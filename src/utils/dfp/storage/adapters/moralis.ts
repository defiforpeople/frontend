import { Deposit, Strategy } from '../../dfp.types';
import { IDFPStorage } from '../storage.types';

export class MoralisStorage implements IDFPStorage {
  private serverUrl: string;
  private appUrl: string;
  private mainContract: string;

  constructor(serverUrl: string, appId: string, mainContractAddr: string) {
    this.serverUrl = serverUrl;
    this.appUrl = appId;
    this.mainContract = mainContractAddr;
  }

  public listStrategies(): Promise<Strategy[]> {
    throw new Error('Method not implemented.');
  }
}
