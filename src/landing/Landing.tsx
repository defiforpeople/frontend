import React from 'react';

import { Box } from '@chakra-ui/react';

import NavbarLanding from '../navbar/NavbarLanding';
import FooterApp from '../footers/Footers-app';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

function Landing() {
  return (
    <Box h="calc(100vh)" bg={'white'}>
      <NavbarLanding />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      {/* <Onboarding /> */}
      <FooterApp />
    </Box>
  );
}

export default Landing;
