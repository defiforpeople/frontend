import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarLanding from '../navbar/NavbarLanding';
import FooterApp from '../footers/Footers-app';
import SectionOne from './SectionOne';

function Landing() {
  return (
    <Box h="calc(100vh)" bg={'white'}>
      <NavbarLanding />
      <SectionOne />
      {/* <Onboarding /> */}
      <FooterApp />
    </Box>
  );
}

export default Landing;
