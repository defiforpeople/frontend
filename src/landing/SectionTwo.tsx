import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as ChartImage } from '../assets/images/chart-image.svg';
import { ReactComponent as ChartMobileImage } from '../assets/images/chart-mobile-image.svg';

function SectionTwo() {
  return (
    <Box>
      <Center>
        <Flex flexDirection={'column'} alignItems="center">
          <Text
            fontSize={['40px', '55px', '55px']}
            lineHeight={['48px', '66px', '66px']}
            color="#282828"
            marginTop={['40px', '100px', '100px']}
            textAlign="center"
            width={['300px', '100%', '100%']}
          >
            Grow your savings 📈
          </Text>

          <Box display={['none', 'block', 'block']}>
            <ChartImage />
          </Box>

          <Box display={['block', 'none', 'none']}>
            <ChartMobileImage width={'97%'} />
          </Box>

          <Button
            bg={'primary'}
            borderRadius={'70'}
            width="200px"
            marginTop={['30px', '30px', '30px']}
            marginBottom={'20px'}
          >
            <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
              Simulate
            </Text>
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default SectionTwo;
