import React from 'react';

import NavBar from './navbar/NavBar';
import FooterApp from './footers/Footers-app';
import Dashboard from './dashboard/Dashboard';
import Landing from './landing/Landing';
import { Box } from '@chakra-ui/react';
// import Onboarding from './dashboard/onboarding/onboarding';

function App() {
  return <Landing />;
  // return (
  //   <Box w="100%" h="calc(100vh)" bg={'white'}>
  //     <NavBar />
  //     <Dashboard />
  //     <FooterApp />
  //   </Box>
  // );
}

export default App;
