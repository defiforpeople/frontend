import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarLanding from '../navbar/NavbarLanding';
import FooterApp from '../footers/Footers-app';

function Landing() {
  return (
    <Box w="100%" h="calc(100vh)" bg={'white'}>
      <NavbarLanding />
      {/* <Onboarding /> */}
      <FooterApp />
    </Box>
  );
}

export default Landing;
