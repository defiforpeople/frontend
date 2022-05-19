import React from 'react';

import { Box } from '@chakra-ui/react';

import Dashboard from './Dashboard';
import FooterApp from './footers/Footers-app';

import NavbarApp from './navbar/NavbarApp';

function DefiForPeopleApp() {
  return (
    <Box w="100%" h="calc(100vh)">
      <NavbarApp />
      <Dashboard />
      <FooterApp />
    </Box>
  );
}

export default DefiForPeopleApp;
