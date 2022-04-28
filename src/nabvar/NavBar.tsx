import React from 'react';

import { Box, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import ConnectButton from './ConnectButton';
import Logo from './logo';
import AccountModal from './AccountModal';
import ChainButton from './ChainButton';

// import { ReactComponent as EthereumLogo } from '../assets/logos/ethereum-logo.svg';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={3}
      bgColor="dark"
    >
      <Flex align="center" justify="space-between">
        <HamburgerIcon w={6} h={6} color="white" />

        {/* <Logo /> */}

        <Heading as="h2" size="md" color="white" paddingLeft={5}>
          Defi for People
        </Heading>
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
