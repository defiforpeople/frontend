import React from 'react';

import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { ReactComponent as EthereumLogo } from '../assets/logos/ethereum-logo.svg';
import { TriangleDownIcon } from '@chakra-ui/icons';

function ChainButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        marginRight={5}
        leftIcon={<EthereumLogo width={25} />}
        rightIcon={<TriangleDownIcon h={3} />}
        onClick={onOpen}
      >
        Ehereum
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Texto largo de body</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChainButton;
