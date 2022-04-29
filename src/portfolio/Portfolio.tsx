import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

function Portofolio() {
  return (
    <Center>
      <Box
        bg={'white'}
        width={'80%'}
        height={200}
        borderRadius={10}
        marginTop={10}
      >
        <Text color={'third'} fontSize="lg" fontWeight={'bold'} margin={5}>
          Portfolio
        </Text>
      </Box>
    </Center>
  );
}

export default Portofolio;
