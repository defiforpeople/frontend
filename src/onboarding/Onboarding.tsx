import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarApp from '../dashboard/navbar/NavbarApp';
import FooterApp from '../dashboard/footers/Footers-app';
import DashboardOnboarding from './DashboardOnborading';

function Onboarding() {
  return (
    <Box h="calc(100vh)" bg={'white'}>
      <NavbarApp />
      <DashboardOnboarding />
      <FooterApp />
    </Box>
  );
}

export default Onboarding;
