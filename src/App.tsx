import React from 'react';

import { Box } from '@chakra-ui/react';
import NavBar from './nabvar/NavBar';
import Portofolio from './portfolio/Portfolio';
import FooterApp from './footers/Footers-app';
import ConnectWallet from './portfolio/ConnectWallet';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)" bg={'gray'}>
        <NavBar />
        {/* <Portofolio /> */}
        <ConnectWallet />
        <FooterApp />
      </Box>
    </div>
  );
}

export default App;
