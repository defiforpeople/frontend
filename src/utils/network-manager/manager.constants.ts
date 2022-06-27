// TODO(ca): add support to below networks
// ropsten 0x3
// rinkeby 0x4
// kovan 0x2a
// mumbai 0x13881
// bsc testnet 0x61
// avalanche testnet 0xa869

import { Network, Token } from './manager.types';

const {
  REACT_APP_RINKEBY_STRATEGY_ADDRESS,
  REACT_APP_RINKEBY_WETH_ADDRESS,
  REACT_APP_AVAX_STRATEGY_ADDRESS,
  REACT_APP_AVAX_TESTNET_STRATEGY_ADDRESS,
  REACT_APP_AVAX_WAVAX_ADDRESS,
  REACT_APP_AVAX_TESTNET_WAVAX_ADDRESS,
} = process.env;

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
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: '',
      },
    },
  },
  rinkeby: {
    name: 'Ethereum Rinkeby',
    chainName: 'rinkeby',
    chainId: '0x4',
    dev: true,
    nativeToken: {
      symbol: 'eth',
      decimals: 18,
    },
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: REACT_APP_RINKEBY_STRATEGY_ADDRESS!,
      },
    },
  },
  goerli: {
    name: 'Ethereum Goerli',
    chainName: 'goerli',
    chainId: '0x5',
    dev: true,
    nativeToken: {
      symbol: 'eth',
      decimals: 18,
    },
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: '',
      },
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
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: '',
      },
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
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: '',
      },
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
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: REACT_APP_AVAX_STRATEGY_ADDRESS!,
      },
    },
  },
  'avalanche testnet': {
    name: 'Avalanche Testnet',
    chainName: 'avalanche testnet',
    chainId: '0xa869',
    dev: true,
    nativeToken: {
      symbol: 'avax',
      decimals: 18,
    },
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: REACT_APP_AVAX_TESTNET_STRATEGY_ADDRESS!,
      },
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
    strategies: {
      recursive_farming: {
        name: 'Recursive Farming',
        address: '',
      },
    },
  },
};

export const tokens: { [name: string]: { [name: string]: Token } } = {
  avalanche: {
    wavax: {
      symbol: 'wavax',
      decimals: 18,
      address: REACT_APP_AVAX_WAVAX_ADDRESS!,
    },
  },
  'avalanche testnet': {
    wavax: {
      symbol: 'wavax',
      decimals: 18,
      address: REACT_APP_AVAX_TESTNET_WAVAX_ADDRESS!,
    },
  },
  rinkeby: {
    weth: {
      symbol: 'weth',
      decimals: 18,
      address: REACT_APP_RINKEBY_WETH_ADDRESS!,
    },
  },
};

export const defaultNetwork = networks['rinkeby'];
