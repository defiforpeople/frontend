import React, { useEffect, useState } from 'react';

import { useMoralis, useMoralisWeb3Api } from 'react-moralis';

import { Button, Box, Text, Icon, useDisclosure } from '@chakra-ui/react';

import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

import MobileConnectWalletModal from './MobileConnectWalletModal';

type Props = {
  handleOpenModal: any;
};

function ConnectButton({ handleOpenModal }: Props) {
  // console.log('Its rendering ConnectButton component');

  const { t } = useTranslation('connectWallet');

  const [ensName, setEnsName] = useState('');

  const { authenticate, isAuthenticated, user } = useMoralis();

  const Web3Api = useMoralisWeb3Api();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isAuthenticated) {
      const fetchBalance = async () => {
        // get ENS domain of an address
        const { name: ensName } = await Web3Api.resolve.resolveAddress();

        setEnsName(ensName);
      };

      fetchBalance();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, user]);

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
      <Button
        onClick={handleOpenModal}
        border="1px solid transparent"
        _hover={{
          backgroundColor: 'primary',
          color: 'white',
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
        color="grayLetter"
      >
        <Icon as={PersonIcon} marginRight={3} />

        <Text fontWeight={700} fontSize={'18'} lineHeight={'21.6px'}>
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

        <Icon as={KeyboardArrowDownIcon} marginRight={3} />
      </Button>
    </Box>
  ) : (
    <Box>
      <Button
        onClick={login}
        bg="primary"
        color="white"
        border="1px solid transparent"
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'sixth',
          backgroundColor: 'sixth',
        }}
        borderRadius="xl"
        marginRight={5}
        px={3}
        height="38px"
        display={['none', 'block', 'block']}
      >
        {t('connectWallet')}
      </Button>

      <Button
        onClick={onOpen}
        bg="primary"
        color="white"
        border="1px solid transparent"
        _hover={{
          border: '1px',
          borderStyle: 'solid',
          borderColor: 'sixth',
          backgroundColor: 'sixth',
        }}
        borderRadius="xl"
        marginRight={5}
        px={3}
        height="38px"
        display={['block', 'none', 'none']}
      >
        {t('connectWallet')}
      </Button>

      <MobileConnectWalletModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default ConnectButton;