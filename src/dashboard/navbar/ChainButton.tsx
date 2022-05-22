import { useState } from 'react';

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

import { ReactComponent as EthereumLogo } from '../../assets/logos/ethereum-logo.svg';
import { ReactComponent as PolygonLogo } from '../../assets/logos/polygon-logo.svg';
import { ReactComponent as BnbChainLogo } from '../../assets/logos/bnbchain-logo.svg';
import { ReactComponent as AvalancheLogo } from '../../assets/logos/avalanche-logo.svg';
import { ReactComponent as FantomLogo } from '../../assets/logos/fantom-logo.svg';

import LogoNetwork from './LogoNetwork';
import ConnectedNetwork from './ConnectedNetwork';
import { useNetworkManager } from '../../hooks/use-manager';
import { defaultNetwork, ChainName } from '../../utils/network-manager';

function ChainButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { manager } = useNetworkManager();

  const [network, setNetwork] = useState(defaultNetwork);
  const networks = manager.listNetworks();

  const changeNetwork = async (networkName: ChainName) => {
    console.log(`Change network to networkName: ${networkName}`);
    try {
      await manager.switchNetwork(networkName);
      setNetwork(networks[networkName]);

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        marginRight={5}
        leftIcon={<LogoNetwork chainId={network.chainId} />}
        iconSpacing={3}
        onClick={onOpen}
        variant="solid"
        bg={'gray'}
        size="md"
        borderRadius={70}
        display={['none', 'inherit', 'inherit']}
      >
        <ConnectedNetwork networkName={network.name} />
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
            isDisabled={'eth' === network.chainName}
            onClick={() => changeNetwork('eth')}
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
            isDisabled={'polygon' === network.chainName}
            onClick={() => changeNetwork('polygon')}
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
            isDisabled={'bsc' === network.chainName}
            onClick={() => changeNetwork('bsc')}
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
            isDisabled={'avalanche' === network.chainName}
            onClick={() => changeNetwork('avalanche')}
          >
            Avalanche
          </Button>

          <Button
            leftIcon={<FantomLogo width={25} />}
            width={'75%'}
            margin={'auto'}
            justifyContent="start"
            iconSpacing={5}
            isDisabled={'fantom' === network.chainName}
            onClick={() => changeNetwork('fantom')}
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
