import React, { useEffect, useState } from 'react';

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

import { ReactComponent as EthereumLogo } from '../../../assets/logos/ethereum-logo.svg';
import { ReactComponent as PolygonLogo } from '../../../assets/logos/polygon-logo.svg';
import { ReactComponent as BnbChainLogo } from '../../../assets/logos/bnbchain-logo.svg';
import { ReactComponent as AvalancheLogo } from '../../../assets/logos/avalanche-logo.svg';
import { ReactComponent as FantomLogo } from '../../../assets/logos/fantom-logo.svg';

import { Networks } from '../../../utils/network';
import LogoNetwork from './LogoNetwork';
import ConnectedNetwork from './ConnectedNetwork';

function ChainButton() {
  // console.log('Its rendering ChainButton component');

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { Moralis } = useMoralis();

  const { switchNetwork } = useChain();

  const [chain, setChain] = useState('-');

  // console.log('chain', chain);

  useEffect(() => {
    const getNetwork = async () => {
      await Moralis.enableWeb3();

      const chainId = await Moralis.getChainId();

      setChain(chainId!);
    };

    getNetwork();
  }, [Moralis, chain]);

  const changeNetwork = async (networkId: string) => {
    console.log(`Change network to netkorkId: ${networkId}`);
    await Moralis.enableWeb3();

    try {
      await switchNetwork(networkId);

      setChain(networkId);

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const networkDisabled = (networkId: string) => {
    if (networkId === chain) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Button
        marginRight={5}
        leftIcon={<LogoNetwork chainId={chain} />}
        iconSpacing={3}
        onClick={onOpen}
        variant="solid"
        bg={'gray'}
        size="md"
        borderRadius={70}
        display={['none', 'inherit', 'inherit']}
      >
        <ConnectedNetwork chainId={Networks(chain)} />
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
            isDisabled={networkDisabled('0x1')}
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
            isDisabled={networkDisabled('0x89')}
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
            isDisabled={networkDisabled('0x38')}
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
            isDisabled={networkDisabled('0xa86a')}
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
            isDisabled={networkDisabled('0xfa')}
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
