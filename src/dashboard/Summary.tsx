import React from 'react';

import { Box, Text } from '@chakra-ui/react';

function Summary() {
  return (
    <Box padding={10}>
      <Text
        fontWeight={700}
        fontSize={'26'}
        lineHeight={'31.2px'}
        color="black"
      >
        Investment Summary 📈
      </Text>

      <Text
        fontWeight={400}
        fontSize={'16'}
        lineHeight={'19.2px'}
        letterSpacing={'1%'}
        color="grayLetter"
        paddingTop={3}
      >
        You have been investing from 420 days ago
      </Text>
    </Box>
  );
}

export default Summary;
