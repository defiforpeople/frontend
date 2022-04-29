import React, { useState } from 'react';

import { useChain, useMoralis } from 'react-moralis';

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

import Networks from '../utils/network';
import LogoNetwork from './LogoNetwork';

function ChainButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { Moralis } = useMoralis();

  const { switchNetwork, chainId } = useChain();

  const [chain, setChain] = useState('0x1');

  const changeNetwork = async (networkID: string) => {
    console.log(`Change network to netkorkId: ${networkID}`);
    await Moralis.enableWeb3();

    try {
      await switchNetwork(networkID);
    } catch (error) {
      console.log(error);
    }
    const chainId = await Moralis.getChainId();
    console.log(chainId);

    setChain(chainId!);
  };

  return (
    <>
      <Button
        marginRight={5}
        leftIcon={<LogoNetwork chainId={chain} />}
        rightIcon={<TriangleDownIcon h={3} />}
        onClick={onOpen}
      >
        {Networks(chain)}
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
            onClick={() => changeNetwork('0x1')}
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
            onClick={() => changeNetwork('0x89')}
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
            onClick={() => changeNetwork('0x38')}
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
            onClick={() => changeNetwork('0xa86a')}
          >
            Avalanche
          </Button>

          <Button
            leftIcon={<FantomLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            justifyContent="start"
            iconSpacing={5}
            onClick={() => changeNetwork('0xfa')}
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
