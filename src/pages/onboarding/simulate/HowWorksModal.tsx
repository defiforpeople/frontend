import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  isOpen: any;
  onClose: any;
};

function HowWorksModal({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size={'sm'}>
      <ModalOverlay />
      <ModalContent
        background="white"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader>
          <Text fontSize="lg" fontWeight="bold">
            Cómo se calcula:
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Consideramos 2 posibles escenarios, optimista y pesimista</Text>

          <Text marginTop={5}>Optimista APY: 10%</Text>
          <Text>Pesimista APY: 5%</Text>

          <Text marginTop={5}>El valor de cada año se calcula como:</Text>

          <Text paddingTop={4} paddingBottom={10} textAlign="center">
            valor = valor del año anterior ( 1 + APY) + inversión recurrente
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default HowWorksModal;
