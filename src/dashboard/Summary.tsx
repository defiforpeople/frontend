import React from 'react';

import { Box, HStack, Icon, Text } from '@chakra-ui/react';

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
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🟢
              </Text>

              <Text
                padding={3}
                fontWeight={400}
                fontSize={'20px'}
                lineHeight={'24px'}
                letterSpacing={'-3%'}
                color="#282828"
              >
                Your deposits
              </Text>

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Last deposit three days ago)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $25,500
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🟢
              </Text>

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

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Estimaded average 55.55% APY)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $1,723.33
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🔴
              </Text>

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
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              -$555
            </Text>
          </HStack>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          padding={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                🔴
              </Text>

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

              <Text
                paddingTop={1}
                fontWeight={400}
                fontSize={'12px'}
                lineHeight={'14.4px'}
                color="grayLetter"
                fontStyle={'oblique'}
              >
                (Operational/Administrative fees)
              </Text>
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              -$12.71
            </Text>
          </HStack>
        </Box>

        <Box padding={2}>
          <HStack justifyContent="space-between">
            <HStack>
              <Text paddingLeft={3} fontSize={'20'}>
                💰
              </Text>

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
            </HStack>

            <Text
              paddingRight={5}
              fontWeight={400}
              fontSize={'20px'}
              lineHeight={'24px'}
              letterSpacing={'-3%'}
              color="#282828"
            >
              $26,655.62
            </Text>
          </HStack>
        </Box>
      </Box>

      <Text
        fontWeight={400}
        fontSize={'16'}
        lineHeight={'19.2px'}
        letterSpacing={'1%'}
        color="grayLetter"
        paddingTop={5}
        textAlign={'right'}
      >
        Updated at 11/05/2022
      </Text>
    </Box>
  );
}

export default Summary;
