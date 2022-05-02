import React from 'react';

import { Flex, useDisclosure } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { ReactComponent as DefiForPeopleLogo } from '../assets/logos/defi-people-logo.svg';

import ConnectButton from './ConnectButton';
import AccountModal from './AccountModal';
import ChainButton from './ChainButton';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justify="space-between" bg="white">
      <Flex align="center">
        <HamburgerIcon w={6} h={6} color="primary" marginLeft={10} />

        <DefiForPeopleLogo height={60} />
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
