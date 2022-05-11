import React from 'react';

import { Box, Button, Center, Text } from '@chakra-ui/react';

import { ReactComponent as WalletIcon } from '../assets/logos/wallet-icon.svg';

function ConnectWallet() {
  return (
    <Box>
      <Box
        bg={'white'}
        borderRadius={15}
        height="356px"
        width="800px"
        position={'absolute'}
        left={'50%'}
        top={'50%'}
        transform={'translate(-50%, -50%)'}
        boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
      >
        <Box marginTop={10}>
          <Center>
            <WalletIcon width={80} height={80} />
          </Center>
        </Box>

        <Center margin={5}>
          <Text
            fontWeight={700}
            fontSize={'22'}
            letterSpacing={'5px'}
            lineHeight={'26.4px'}
          >
            Connect Wallet
          </Text>
        </Center>

        <Center margin={5}>
          <Text
            fontWeight={400}
            fontSize={'18'}
            lineHeight={'21.6px'}
            color="grayLetter"
          >
            Connect wallet to view your assets in DeFi for People
          </Text>
        </Center>

        <Center margin={5}>
          <Button bg={'primary'} color="white" borderRadius={70}>
            <Text fontWeight={400} fontSize={'18px'} lineHeight={'21.6px'}>
              Connect to Wallet
            </Text>
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default ConnectWallet;
