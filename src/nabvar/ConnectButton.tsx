import React, { useEffect, useState } from 'react';

import { Button, Box, Text } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';

import { formatEther } from '@ethersproject/units';

type Props = {
  handleOpenModal: any;
};

function ConnectButton({ handleOpenModal }: Props) {
  const [balance, setBalance] = useState('');

  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchBalance = async () => {
        const x = await Moralis.Web3API.account.getNativeBalance({
          chain: 'eth',
          address: user!.attributes.ethAddress,
        });

        setBalance(x.balance);
      };

      fetchBalance();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      try {
        const user = await authenticate({
          signingMessage: 'Log in DeFi for People using Moralis',
        });
        console.log('logged in user:', user);
        console.log(user!.get('ethAddress'));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return isAuthenticated ? (
    <Box
      display="flex"
      alignItems="center"
      background="white"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="red" fontSize="md">
          {balance && parseFloat(formatEther(balance)).toFixed(4)} ETH
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="gray.400"
        border="1px solid transparent"
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'blue.400',
          // backgroundColor: 'blue',
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {user!.attributes.ethAddress &&
            `${user!.attributes.ethAddress.slice(
              0,
              6,
            )}...${user!.attributes.ethAddress.slice(
              user!.attributes.ethAddress.length - 4,
              user!.attributes.ethAddress.length,
            )}`}
        </Text>
      </Button>
    </Box>
  ) : (
    <Button onClick={login}>Connect Wallet</Button>
  );
}

export default ConnectButton;
