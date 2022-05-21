import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarLanding from '../dashboard/navbar/NavbarLanding';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import FooterLanding from './FooterLanding';

function Landing() {
  return (
    <Box bg={'white'}>
      <NavbarLanding />
      <SectionOne />
      <SectionTwo />
      <FooterLanding />
    </Box>
  );
}

export default Landing;
