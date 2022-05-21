import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarApp from '../navbar/NavbarApp';
import FooterApp from '../footers/Footers-app';

function Onboarding() {
  return (
    <Box h="calc(100vh)" bg={'white'}>
      <NavbarApp />

      <FooterApp />
    </Box>
  );
}

export default Onboarding;
