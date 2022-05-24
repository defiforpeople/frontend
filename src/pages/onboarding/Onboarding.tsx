import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarApp from '../app/navbar/NavbarApp';
import FooterApp from '../app/footers/FootersApp';
import DashboardOnboarding from './DashboardOnborading';
import NavbarLanding from '../app/navbar/NavbarLanding';

function Onboarding() {
  return (
    <Box bg={'white'}>
      <NavbarLanding />
      <DashboardOnboarding />
      <FooterApp />
    </Box>
  );
}

export default Onboarding;
