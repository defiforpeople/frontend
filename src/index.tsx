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

const { REACT_APP_SERVER_URL, REACT_APP_APP_ID } = process.env;
if (!REACT_APP_SERVER_URL || !REACT_APP_APP_ID) {
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
