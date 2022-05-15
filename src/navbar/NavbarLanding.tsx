import { Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Logo from '../components/logo';
import AccountModal from './AccountModal';
import ChainButton from './ChainButton';
import ConnectButton from './ConnectButton';

function NavbarLanding() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify="space-between"
      bg="white"
      height={['70px', '50px', '50px']}
      boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.15)'}
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

export default NavbarLanding;
