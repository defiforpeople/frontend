import React from 'react';

import { Box } from '@chakra-ui/react';

import NavBar from './nabvar/NavBar';
import FooterApp from './footers/Footers-app';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)" bg={'white'}>
        <NavBar />
        <Dashboard />
        <FooterApp />
      </Box>
    </div>
  );
}

export default App;
