import React from 'react';

import { Box, Text } from '@chakra-ui/react';

function Summary() {
  return (
    <Box padding={10} width={'70%'}>
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

      <Box
        marginTop={5}
        boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
        borderRadius={14}
      >
        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
        >
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'20'}
            lineHeight={'24px'}
            letterSpacing={'-3%'}
            color="#282828"
          >
            Your deposits
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
            fontSize={'20'}
            lineHeight={'24px'}
            letterSpacing={'-3%'}
            color="#282828"
          >
            Rewards
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
            fontSize={'20'}
            lineHeight={'24px'}
            letterSpacing={'-3%'}
            color="#282828"
          >
            Withdraws
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
            fontSize={'20'}
            lineHeight={'24px'}
            letterSpacing={'-3%'}
            color="#282828"
          >
            Other charges
          </Text>
        </Box>

        <Box>
          <Text
            padding={3}
            fontWeight={400}
            fontSize={'20'}
            lineHeight={'24px'}
            letterSpacing={'-3%'}
            color="#282828"
          >
            Total balance
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Summary;
