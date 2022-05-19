import React, { useState } from 'react';

import {
  Button,
  Center,
  Divider,
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
  VStack,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

type Props = {
  isOpen: any;
  onClose: any;
};

function InvesmentModal({ isOpen, onClose }: Props) {
  const initialStrategy: string = 'Select Strategy';

  const [strategy, setStrategy] = useState(initialStrategy);

  const handleStrategyChange = (strategy: string) => {
    setStrategy(strategy);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
          <VStack>
            <Text>Strategy</Text>
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
                <Text
                  fontSize={'16px'}
                  fontWeight={'18.75'}
                  letterSpacing="5%"
                  color={strategy === initialStrategy ? '#666666' : 'black'}
                  padding={3}
                >
                  {strategy}
                </Text>
              </MenuButton>
              <MenuList border={'0'} width={'280px'}>
                <MenuItem
                  onClick={() => handleStrategyChange('Recursive Farming')}
                >
                  <Text
                    fontSize={'16px'}
                    fontWeight={'18.75'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    Recursive Farming
                  </Text>
                </MenuItem>

                <MenuItem
                  onClick={() => handleStrategyChange('Staking Farming')}
                >
                  <Text
                    fontSize={'16px'}
                    fontWeight={'18.75'}
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
                    fontWeight={'18.75'}
                    letterSpacing="5%"
                    color={'black'}
                    padding={3}
                  >
                    Delta Neutral
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default InvesmentModal;
