import React from 'react';

import { Box, Button, HStack, Text } from '@chakra-ui/react';

type Props = {
  menuIndex: number;
  setMenuIndex: (menuIndex: number) => void;
};

function Menu({ menuIndex, setMenuIndex }: Props) {
  return (
    <Box padding={10}>
      <Box boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'} borderRadius={14}>
        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          bg={menuIndex === 0 ? 'primary' : 'white'}
          borderTopLeftRadius={14}
          borderTopRightRadius={14}
          onClick={() => setMenuIndex(0)}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 0 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 0 ? 'white' : 'grayLetter'}
          >
            Summary
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          onClick={() => setMenuIndex(1)}
          bg={menuIndex === 1 ? 'primary' : 'white'}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 1 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 1 ? 'white' : 'grayLetter'}
          >
            Recursive Farming
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          onClick={() => setMenuIndex(2)}
          bg={menuIndex === 2 ? 'primary' : 'white'}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 2 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 2 ? 'white' : 'grayLetter'}
          >
            Staking Farming
          </Text>
        </Box>

        <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          onClick={() => setMenuIndex(3)}
          bg={menuIndex === 3 ? 'primary' : 'white'}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 3 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 3 ? 'white' : 'grayLetter'}
          >
            Delta Neutral
          </Text>
        </Box>

        {/* <Box
          borderBottom="1px"
          borderStyle="solid"
          borderColor="rgba(0, 0, 0, 0.1)"
          onClick={() => setMenuIndex(4)}
          bg={menuIndex === 4 ? 'primary' : 'white'}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 4 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 4 ? 'white' : 'grayLetter'}
          >
            AXS Delta Staking
          </Text>
        </Box> */}

        <Box
          onClick={() => setMenuIndex(4)}
          bg={menuIndex === 4 ? 'primary' : 'white'}
          borderBottomLeftRadius={14}
          borderBottomRightRadius={14}
        >
          <Text
            padding={3}
            fontWeight={menuIndex === 4 ? 'bold' : 'normal'}
            fontSize={'16'}
            lineHeight={'19.2px'}
            letterSpacing={'-3%'}
            color={menuIndex === 4 ? 'white' : 'grayLetter'}
          >
            FAQ
          </Text>
        </Box>
      </Box>
      <Text
        paddingTop={10}
        fontWeight="bold"
        fontSize={'22'}
        lineHeight={'26.4px'}
        color="black"
      >
        What do you want?
      </Text>
      <HStack padding={3}>
        <Button
          bg={'primary'}
          color="white"
          borderRadius={53}
          boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
          width={'125px'}
        >
          <Text fontWeight="bold" fontSize={14} lineHeight={'16.8px'}>
            Invest
          </Text>
        </Button>

        <Button
          bg={'white'}
          color="primary"
          borderRadius={53}
          boxShadow={'0px 2px 3px rgba(0, 0, 0, 0.15)'}
          width={'125px'}
        >
          <Text fontWeight="bold" fontSize={14} lineHeight={'16.8px'}>
            Withdraw
          </Text>
        </Button>
      </HStack>
    </Box>
  );
}

export default Menu;
