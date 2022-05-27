/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KeeperBase, KeeperBaseInterface } from "../KeeperBase";

const _abi = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220f90a12b7eb6b8afae80ae2fc31d0beb43d7a3bc44eb263d94041b3969600864364736f6c634300080a0033";

export class KeeperBase__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KeeperBase> {
    return super.deploy(overrides || {}) as Promise<KeeperBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KeeperBase {
    return super.attach(address) as KeeperBase;
  }
  connect(signer: Signer): KeeperBase__factory {
    return super.connect(signer) as KeeperBase__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeeperBaseInterface {
    return new utils.Interface(_abi) as KeeperBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeeperBase {
    return new Contract(address, _abi, signerOrProvider) as KeeperBase;
  }
}