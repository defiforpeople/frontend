import React from 'react';

import { Box } from '@chakra-ui/react';

function FooterApp() {
  return (
    <Box
      color={'grayLetter'}
      lineHeight={28.8}
      letterSpacing={'-2%'}
      position="fixed"
      bottom={0}
    >
      DeFi for People 2022 © All Rights Reserver
    </Box>
  );
}

export default FooterApp;
