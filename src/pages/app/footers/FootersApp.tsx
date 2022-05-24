import React from 'react';

import { Container, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

function FooterApp() {
  const { t } = useTranslation('footer');

  return (
    <Container as="footer" marginTop={'auto'} height={'50px'}>
      <Text padding={3} color={'grayLetter'}>
        {t('copyright')}{' '}
      </Text>
    </Container>
  );
}

export default FooterApp;
