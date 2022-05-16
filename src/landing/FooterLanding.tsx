import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import Logo from '../components/logo';

function FooterLanding() {
  return (
    <Box bg={'white'} height={'510px'}>
      <Box paddingTop={50} paddingLeft={100}>
        <Logo w={160} h={10} color="#3A0CA3" />
      </Box>

      <Flex flexDirection={'row'} paddingTop={5} paddingLeft={100}>
        <Box width={'20%'}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'5px'}
            color="#282828"
          >
            Info
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            How we work?
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Gobernance
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Developers
          </Text>
        </Box>

        <Box width={'20%'}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'5px'}
            color="#282828"
          >
            Products
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Delta Neutral
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Stake Farming
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Recursive Farming
          </Text>
        </Box>

        <Box bg="green" width={'40%'}>
          Get in touch
        </Box>
      </Flex>
      {/* <Box color={'grayLetter'} padding={5} position="fixed" bottom={0}>
        Defi for People 2022
      </Box> */}
    </Box>
  );
}

export default FooterLanding;
