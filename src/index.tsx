import * as React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import App from './App';

import theme from './theme';
import Fonts from './fonts';

import { MoralisProvider } from 'react-moralis';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <MoralisProvider
        serverUrl={process.env.REACT_APP_SERVER_URL as string}
        appId={process.env.REACT_APP_APP_ID as string}
      >
        <App />
      </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
