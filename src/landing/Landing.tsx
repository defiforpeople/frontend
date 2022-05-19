import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarLanding from '../navbar/NavbarLanding';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import FooterLanding from './FooterLanding';

function Landing() {
  return (
    <Box h="calc(100vh)" bg={'white'}>
      <NavbarLanding />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FooterLanding />
    </Box>
  );
}

export default Landing;
