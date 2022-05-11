import React from 'react';

import { Box, Text } from '@chakra-ui/react';

function Menu() {
  return (
    <Box padding={10}>
      <Box
        boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
        borderBottomLeftRadius={14}
        borderBottomRightRadius={14}
      >
        <Box bg="primary" borderTopLeftRadius={14} borderTopRightRadius={14}>
          <Text
            padding={3}
            fontWeight={700}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color="white"
          >
            Summary
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
        >
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color="grayLetter"
          >
            Staking Farming
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
        >
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color="grayLetter"
          >
            Delta Neutral
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
        >
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color="grayLetter"
          >
            AXS Delta Staking
          </Text>
        </Box>

        <Box>
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color="grayLetter"
          >
            FAQ
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Menu;
