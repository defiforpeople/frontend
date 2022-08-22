import { Network } from './manager.types';

const {} = process.env;

export const networks: { [name: string]: Network } = {
  matic: {
    name: 'Polygon',
    chainName: 'matic',
    chainId: '0x89',
    dev: false,
    nativeToken: {
      balance: '0',
      symbol: 'matic',
      decimals: 18,
      isNative: true,
    },
  },
  maticmum: {
    name: 'Mumbai',
    chainName: 'maticmum',
    chainId: '0x13881',
    dev: false,
    nativeToken: {
      balance: '0',
      symbol: 'matic',
      decimals: 18,
      isNative: true,
    },
  },
};

// export const tokens: { [name: string]: { [name: string]: Token } } = {
//   avalanche: {
//     wavax: {
//       symbol: 'wavax',
//       decimals: 18,
//       address: REACT_APP_AVAX_WAVAX_ADDRESS!,
//     },
//   },
//   'avalanche testnet': {
//     wavax: {
//       symbol: 'wavax',
//       decimals: 18,
//       address: REACT_APP_AVAX_TESTNET_WAVAX_ADDRESS!,
//     },
//   },
//   rinkeby: {
//     weth: {
//       symbol: 'weth',
//       decimals: 18,
//       address: REACT_APP_RINKEBY_WETH_ADDRESS!,
//     },
//   },
// };

// export const ToNetwork = {
//   matic: 'polygon',
//   matimum: 'mumbai',
// };

export const defaultNetwork = networks['matic'];
