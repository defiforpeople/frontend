import React from 'react';

import { Box, Container, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

function FooterApp() {
  const { t } = useTranslation('footer');

  return (
    <Container as="footer" role="contentinfo" position={'relative'} bottom={0}>
      <Text padding={3} color={'grayLetter'}>
        {t('copyright')}{' '}
      </Text>
    </Container>
  );
}

export default FooterApp;
