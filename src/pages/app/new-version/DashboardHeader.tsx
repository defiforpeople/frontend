import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

import { Link } from 'react-router-dom';

function DashboardHeader() {
  const { t } = useTranslation('strategies');

  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
          p={{ base: 12, md: 8 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            {t('title')} <br />
            <Text as={'span'} color={'third'}>
              {t('subtitle')}
            </Text>
          </Heading>
          <Text color={'gray.500'}>{t('presentation')}</Text>
        </Stack>
      </Container>
    </>
  );
}

export default DashboardHeader;
