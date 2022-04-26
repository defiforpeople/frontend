import React from 'react';

import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import Logo from './logo';
import ConnectButton from './ConnectButton';

function NavBar() {
  const { onOpen } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    >
      <HamburgerIcon w={6} h={6} />

      <Logo w="100px" />

      <Text variant="h6">Defi for People</Text>

      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box marginLeft="auto" marginRight="0">
          <ConnectButton handleOpenModal={onOpen} />
          {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavBar;
