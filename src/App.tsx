import React from 'react';

import { Box } from '@chakra-ui/react';
import NavBar from './nabvar/NavBar';
import Portofolio from './dashboard/Portfolio';
import FooterApp from './footers/Footers-app';
import ConnectWallet from './dashboard/ConnectWallet';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)" bg={'white'}>
        <NavBar />
        {/* <Portofolio /> */}
        <Dashboard />
        <FooterApp />
      </Box>
    </div>
  );
}

export default App;
