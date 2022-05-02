import React, { useEffect, useState } from 'react';

import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

import { Button, Box, Text, Icon } from '@chakra-ui/react';

// import { formatEther } from '@ethersproject/units';

import PersonIcon from '@mui/icons-material/Person';

type Props = {
  handleOpenModal: any;
};

function ConnectButton({ handleOpenModal }: Props) {
  const [balance, setBalance] = useState('');

  const [ensName, setEnsName] = useState('');

  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchBalance = async () => {
        // get ENS domain of an address
        const { name: ensName } = await Web3Api.resolve.resolveAddress();

        setEnsName(ensName);

        const objectBalance = await Moralis.Web3API.account.getNativeBalance({
          chain: 'eth',
          address: user!.attributes.ethAddress,
        });

        setBalance(objectBalance.balance);
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
        console.log('Logged in user:', user);
        console.log(user!.get('ethAddress'));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return isAuthenticated ? (
    <Box display="flex" marginRight={10}>
      {/* <Box px="3">
        <Text color="third" fontSize="md" fontWeight={'bold'}>
          {balance && parseFloat(formatEther(balance)).toFixed(4)} ETH
        </Text>
      </Box> */}
      <Button
        onClick={handleOpenModal}
        bg="third"
        border="1px solid transparent"
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'sixth',
          backgroundColor: 'sixth',
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Icon as={PersonIcon} color="white" marginRight={3} />
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {ensName !== ''
            ? ensName
            : user!.attributes.ethAddress &&
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
