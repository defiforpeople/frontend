import * as React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

import theme from './theme';
import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MoralisProvider
        serverUrl="https://ziawpww1v3ok.usemoralis.com:2053/server"
        appId="qNzF6V5ET2HCpzutwtyuJRT1kclgsB3brumwmNBg"
      >
        <App />
      </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
