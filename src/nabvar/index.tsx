import React from 'react';

import { Box, Flex, useDisclosure } from '@chakra-ui/react';

import Logo from './logo';
import ConnectButton from './ConnectButton';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['red', 'red', 'primary.700', 'primary.700']}
    >
      <Logo w="100px" color={['red', 'red', 'primary.500', 'primary.500']} />
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box marginLeft="auto" marginRight="0">
          wena
          <ConnectButton handleOpenModal={onOpen} />
          {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavBar;
