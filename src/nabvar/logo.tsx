import React from 'react';

import { Box, Text } from '@chakra-ui/react';

function Logo(pros: any) {
  return (
    <Box {...pros}>
      <Text fontSize="lg" fontWeight="bold" color="white" paddingLeft={5}>
        D
      </Text>
    </Box>
  );
}

export default Logo;
