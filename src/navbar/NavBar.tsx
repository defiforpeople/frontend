import React from 'react';

import { Flex, useDisclosure } from '@chakra-ui/react';

import ConnectButton from './ConnectButton';
import AccountModal from './AccountModal';
import ChainButton from './ChainButton';
import Logo from '../components/logo';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify="space-between"
      bg="white"
      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.15)'}
      height={'50px'}
    >
      <Flex align="center">
        <Logo w={160} h={6} color="#3A0CA3" />
      </Flex>

      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Flex display={'flex'} align="center">
          <ChainButton />
          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBar;
