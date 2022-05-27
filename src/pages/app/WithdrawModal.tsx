import React from 'react';

import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../i18n';

type Props = {
  isOpen: any;
  onClose: any;
};

function WithdrawModal({ isOpen, onClose }: Props) {
  const { t } = useTranslation('InvesmentModal');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
        borderRadius={'15px'}
      >
        <ModalHeader>{t('title')}</ModalHeader>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}

export default WithdrawModal;
