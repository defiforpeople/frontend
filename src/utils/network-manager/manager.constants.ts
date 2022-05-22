// TODO(ca): add support to below networks
// ropsten 0x3
// rinkeby 0x4
// kovan 0x2a
// mumbai 0x13881
// bsc testnet 0x61
// avalanche testnet 0xa869

import { Network, Token } from './manager.types';

export const networks: { [name: string]: Network } = {
  eth: {
    name: 'Ethereum',
    chainName: 'eth',
    chainId: '0x1',
    dev: false,
    nativeToken: {
      symbol: 'eth',
      decimals: 18,
    },
  },
  goerli: {
    name: 'Goerli',
    chainName: 'goerli',
    chainId: '0x5',
    dev: true,
    nativeToken: {
      symbol: 'eth',
      decimals: 18,
    },
  },
  polygon: {
    name: 'Polygon',
    chainName: 'polygon',
    chainId: '0x89',
    dev: false,
    nativeToken: {
      symbol: 'matic',
      decimals: 18,
    },
  },
  bsc: {
    name: 'Binance Smart Chain',
    chainName: 'bsc',
    chainId: '0x38',
    dev: false,
    nativeToken: {
      symbol: 'bnb',
      decimals: 8,
    },
  },
  avalanche: {
    name: 'Avalanche',
    chainName: 'avalanche',
    chainId: '0xa86a',
    dev: false,
    nativeToken: {
      symbol: 'avax',
      decimals: 18,
    },
  },
  fantom: {
    name: 'Fantom',
    chainName: 'fantom',
    chainId: '0xfa',
    dev: false,
    nativeToken: {
      symbol: 'ftm',
      decimals: 18,
    },
  },
};

export const tokens: { [name: string]: Token } = {
  weth: {
    symbol: 'weth',
    decimals: 18,
    address: '',
  },
  dai: {
    symbol: 'dai',
    decimals: 18,
    address: '',
  },
};

export const defaultNetwork = networks.eth;
