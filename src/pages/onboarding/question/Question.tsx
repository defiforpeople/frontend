import React from 'react';

import { Box, Divider, Text } from '@chakra-ui/react';

function Question() {
  return (
    <Box
      border={'2px'}
      borderColor={'#E5E4E5'}
      borderRadius={'20px'}
      width={'90%'}
      marginTop={'50px'}
    >
      <Box>
        <Text
          padding={3}
          fontWeight={'bold'}
          fontSize={'22px'}
          marginTop={'30px'}
        >
          Quieres invertir todos los meses?
        </Text>
      </Box>

      <Box height={'50px'} fontWeight={'regular'} fontSize={'18px'}>
        <Text padding={3}>Si</Text>
      </Box>

      <Divider />

      <Box height={'50px'} fontWeight={'regular'} fontSize={'18px'}>
        <Text padding={3}>No</Text>
      </Box>

      <Divider />

      <Box height={'50px'} fontWeight={'regular'} fontSize={'18px'}>
        <Text padding={3}>No sé</Text>
      </Box>
    </Box>
  );
}

export default Question;
