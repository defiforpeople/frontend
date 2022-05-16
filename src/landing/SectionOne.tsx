import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

function SectionOne() {
  return (
    <Box bg={'#F1F4F6'} height={'665px'}>
      <Center>
        <Flex flexDirection={'column'}>
          <Text>Investing is simple</Text>
          <Text>
            Transfer from $1 USD and we diversify it in descentralized finance
            and cryptocurrencies. Without fine print and for everyone
          </Text>
          <Button bg={'primary'} borderRadius={'70'}>
            <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
              Begin
            </Text>
          </Button>
          Image
        </Flex>
      </Center>
    </Box>
  );
}

export default SectionOne;
