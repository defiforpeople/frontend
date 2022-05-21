import React from 'react';

import { Box } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../i18n';

function FooterApp() {
  const { t } = useTranslation('footer');

  return (
    <Box color={'grayLetter'} padding={5} position="fixed" bottom={0}>
      {t('copyright')}
    </Box>
  );
}

export default FooterApp;
