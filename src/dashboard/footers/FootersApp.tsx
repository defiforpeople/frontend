import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../i18n';

function FooterApp() {
  const { t } = useTranslation('footer');

  return (
    <Box color={'grayLetter'} position="fixed" bottom={0} width={'100%'}>
      <Text padding={3}>{t('copyright')} </Text>
    </Box>
  );
}

export default FooterApp;
