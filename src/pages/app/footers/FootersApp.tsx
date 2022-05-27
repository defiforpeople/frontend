import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

function FooterApp() {
  const { t } = useTranslation('footer');

  return (
    <Box marginTop={'auto'} height={'50px'} width={'100%'}>
      <Text padding={3} color={'grayLetter'}>
        {t('copyright')}{' '}
      </Text>
    </Box>
  );
}

export default FooterApp;
