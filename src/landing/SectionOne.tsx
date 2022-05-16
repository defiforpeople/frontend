import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as PhoneImage } from '../assets/images/phone-image.svg';

function SectionOne() {
  return (
    <Box bg={'#F1F4F6'}>
      <Center>
        <Flex flexDirection={'column'} alignItems="center">
          <Text
            fontSize={['40px', '55px', '55px']}
            lineHeight={['48px', '66px', '66px']}
            color="#282828"
            marginTop={['20px', '100px', '100px']}
            textAlign="center"
          >
            Investing is simple
          </Text>

          <Text
            fontSize={['18px', '22px', '22px']}
            lineHeight={['21.6px', '28.8px', '28.8ppx']}
            color="grayLetter"
            textAlign="center"
            marginTop={'23px'}
            padding={['10px', '0px', '0px']}
            width={['90%', '600px', '600px']}
          >
            Transfer from $1 and we diversify it in decentralized finance and
            cryptocurrencies. Without fine print and for everyone
          </Text>

          <Button
            bg={'primary'}
            borderRadius={'70'}
            width="200px"
            marginTop={['30px', '50px', '50px']}
          >
            <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
              Begin
            </Text>
          </Button>

          <Box>
            <PhoneImage />
          </Box>
        </Flex>
      </Center>
    </Box>
  );
}

export default SectionOne;
