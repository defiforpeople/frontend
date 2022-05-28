import * as React from 'react';

import '@fontsource/anek-bangla';

import ReactDOM from 'react-dom';

import App from './App';

import Fonts from './fonts';
import theme from './theme';

import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter } from 'react-router-dom';
import { ManagerProvider } from './providers/manager-provider';
import { Adapters } from './utils/network-manager';

const {
  REACT_APP_SERVER_URL,
  REACT_APP_APP_ID,
  REACT_APP_RINKEBY_STRATEGY_ADDRESS,
  REACT_APP_RINKEBY_WETH_ADDRESS,
  REACT_APP_AVAX_STRATEGY_ADDRESS,
  REACT_APP_AVAX_TESTNET_STRATEGY_ADDRESS,
  REACT_APP_AVAX_WAVAX_ADDRESS,
  REACT_APP_AVAX_TESTNET_WAVAX_ADDRESS,
} = process.env;
if (
  !REACT_APP_SERVER_URL ||
  !REACT_APP_APP_ID ||
  !REACT_APP_RINKEBY_STRATEGY_ADDRESS ||
  !REACT_APP_RINKEBY_WETH_ADDRESS ||
  !REACT_APP_AVAX_STRATEGY_ADDRESS ||
  !REACT_APP_AVAX_TESTNET_STRATEGY_ADDRESS ||
  !REACT_APP_AVAX_WAVAX_ADDRESS ||
  !REACT_APP_AVAX_TESTNET_WAVAX_ADDRESS
) {
  throw new Error('invalid ENV values');
}

const moralisAdapter = new Adapters.MoralisAdapter(
  REACT_APP_SERVER_URL,
  REACT_APP_APP_ID,
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <ManagerProvider adapter={moralisAdapter}>
        <HashRouter>
          <App />
        </HashRouter>
      </ManagerProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
