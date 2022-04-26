import React from 'react';

import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import ConnectButton from './ConnectButton';
import Logo from './logo';

function NavBar() {
  const { onOpen } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={3}
      bgColor={'sixth'}
    >
      <Flex align="center" justify="space-between">
        <HamburgerIcon w={6} h={6} color="white" />

        <Logo />

        <Heading as="h2" size="md" color="white" paddingLeft={5}>
          Defi for People
        </Heading>
      </Flex>

      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box>
          <ConnectButton handleOpenModal={onOpen} />
          {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavBar;
