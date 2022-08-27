import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useAdapter } from '../../../../hooks/use-adapter';

type Props = {
  isOpen: any;
  onClose: any;
};

function WithdrawAaveModal({ isOpen, onClose }: Props) {
  const { adapter } = useAdapter();

  const steps = [
    { label: 'Withdraw tokens' },
    { label: 'Finish proccess! 🎉' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Withdraw deposit in Aave</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Wena</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WithdrawAaveModal;
