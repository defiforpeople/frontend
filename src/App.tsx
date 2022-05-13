import React from 'react';

import { Box } from '@chakra-ui/react';

import NavBar from './navbar/NavBar';
import FooterApp from './footers/Footers-app';
import Dashboard from './dashboard/Dashboard';
// import Onboarding from './dashboard/onboarding/onboarding';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)" bg={'white'}>
        <NavBar />
        <Dashboard />
        {/* <Onboarding /> */}
        <FooterApp />
      </Box>
    </div>
  );
}

export default App;
