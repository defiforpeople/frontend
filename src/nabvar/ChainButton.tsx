import React from 'react';

import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { ReactComponent as EthereumLogo } from '../assets/logos/ethereum-logo.svg';
import { ReactComponent as PolygonLogo } from '../assets/logos/polygon-logo.svg';
import { ReactComponent as BnbChainLogo } from '../assets/logos/bnbchain-logo.svg';
import { ReactComponent as AvalancheLogo } from '../assets/logos/avalanche-logo.svg';
import { ReactComponent as FantomLogo } from '../assets/logos/fantom-logo.svg';

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

      <Modal onClose={onClose} isOpen={isOpen} size={'sm'} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select a Blockchain</ModalHeader>
          <ModalCloseButton />

          <Button
            leftIcon={<EthereumLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            marginBottom={3}
            justifyContent="start"
            iconSpacing={5}
          >
            Ethereum
          </Button>

          <Button
            leftIcon={<PolygonLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            marginBottom={3}
            justifyContent="start"
            iconSpacing={5}
          >
            Polygon
          </Button>

          <Button
            leftIcon={<BnbChainLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            marginBottom={3}
            justifyContent="start"
            iconSpacing={5}
          >
            BNB Chain
          </Button>

          <Button
            leftIcon={<AvalancheLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            marginBottom={3}
            justifyContent="start"
            iconSpacing={5}
          >
            Avalanche
          </Button>

          <Button
            leftIcon={<FantomLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            justifyContent="start"
            iconSpacing={5}
          >
            Fantom
          </Button>

          <ModalFooter>
            <Button onClick={onClose} bg="third" color="white" variant="solid">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChainButton;
