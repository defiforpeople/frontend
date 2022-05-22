import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import theme from './theme';
import Fonts from './fonts';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ManagerProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
