import React, { useState } from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ReactComponent as EthLogo } from '../assets/logos/eth-logo.svg';
import { ReactComponent as AvalancheLogo } from '../assets/logos/avalanche-logo.svg';
import { ReactComponent as DaiLogo } from '../assets/logos/dai-logo.svg';

type Props = {
  isOpen: any;
  onClose: any;
};

function InvesmentModal({ isOpen, onClose }: Props) {
  const initialStrategy: string = 'Select Strategy';
  const initialToken: string = 'Select Token';

  const [strategy, setStrategy] = useState(initialStrategy);
  const [token, setToken] = useState(initialToken);

  const handleStrategyChange = (strategy: string) => {
    setStrategy(strategy);
  };

  const handleTokenChange = (token: string) => {
    setToken(token);
  };

  const resetStrategy = () => {
    setStrategy(initialStrategy);

    setToken(initialToken);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={resetStrategy} isCentered>
      <ModalOverlay />
      <ModalContent
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        borderRadius={'15px'}
      >
        <ModalHeader>Invest</ModalHeader>

        <Center>
          <Divider color={'#E1E1E0'} width={'90%'} />
        </Center>

        <ModalBody>
          <Text
            fontWeight={700}
            fontSize={'16px'}
            lineHeight={'18.75px'}
            letterSpacing="5%"
            color={'#282828'}
            paddingTop={3}
            paddingBottom={3}
          >
            Strategy
          </Text>

          {/* Menu for strategy */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={
                strategy === initialStrategy ? (
                  <ChevronDownIcon />
                ) : (
                  <ChevronUpIcon />
                )
              }
              width={'280px'}
              height={'60px'}
              boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
              borderRadius={'8px'}
              justifyContent="space-between"
            >
              <HStack>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={strategy === initialStrategy ? '#666666' : 'black'}
                  padding={3}
                >
                  {strategy}
                </Text>
              </HStack>
            </MenuButton>
            <MenuList border={'0'} width={'280px'}>
              <MenuItem
                onClick={() => handleStrategyChange('Recursive Farming')}
              >
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Recursive Farming
                </Text>
              </MenuItem>

              <MenuItem onClick={() => handleStrategyChange('Staking Farming')}>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Staking Farming
                </Text>
              </MenuItem>

              <MenuItem onClick={() => handleStrategyChange('Delta Neutral')}>
                <Text
                  fontSize={'16px'}
                  lineHeight={'18.75px'}
                  letterSpacing="5%"
                  color={'black'}
                  padding={3}
                >
                  Delta Neutral
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Menu for tokens */}
          <Box display={strategy === initialStrategy ? 'none' : 'block'}>
            <Text
              fontWeight={700}
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'#282828'}
              paddingTop={3}
              paddingBottom={3}
            >
              Token
            </Text>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  strategy === initialStrategy ? (
                    <ChevronDownIcon />
                  ) : (
                    <ChevronUpIcon />
                  )
                }
                width={'280px'}
                height={'60px'}
                boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
                borderRadius={'8px'}
              >
                <HStack>
                  <Box
                    display={token === 'ETH' ? 'block' : 'none'}
                    marginLeft={2}
                  >
                    <EthLogo width={25} height={25} />
                  </Box>

                  <Box display={token === 'AVAX' ? 'block' : 'none'}>
                    <AvalancheLogo width={25} height={25} />
                  </Box>

                  <Box display={token === 'DAI' ? 'block' : 'none'}>
                    <DaiLogo width={25} height={25} />
                  </Box>

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={token === initialToken ? '#666666' : 'black'}
                  >
                    {token}
                  </Text>
                </HStack>
              </MenuButton>
              <MenuList border={'0'} width={'280px'}>
                <MenuItem onClick={() => handleTokenChange('ETH')}>
                  <EthLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    ETH
                  </Text>
                </MenuItem>

                <MenuItem onClick={() => handleTokenChange('AVAX')}>
                  <AvalancheLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    AVAX
                  </Text>
                </MenuItem>

                <MenuItem onClick={() => handleTokenChange('DAI')}>
                  <DaiLogo width={25} height={25} />

                  <Text
                    fontSize={'16px'}
                    lineHeight={'18.75px'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    DAI
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button bg="primary">
            <Text color={'white'}>Continue</Text>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default InvesmentModal;
