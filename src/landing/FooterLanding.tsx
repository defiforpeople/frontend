import React from 'react';

import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  Wrap,
} from '@chakra-ui/react';

import Logo from '../components/logo';
import { ReactComponent as GithubLogo } from '../assets/logos/github-logo.svg';

import { useTranslation } from 'react-i18next';
import '../i18n';

function FooterLanding() {
  const { t, i18n } = useTranslation('FooterLanding');

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <Box bg="#C4C4C405">
      <Box paddingTop={50} paddingLeft={[5, 100, 100]}>
        <Logo w={160} h={10} color="#3A0CA3" />
      </Box>

      <Wrap paddingTop={5} paddingLeft={[5, 100, 100]}>
        <Box width={['45%', '20%', '20%']}>
          <Text
            fontSize={['24px', '28px', '28px']}
            lineHeight={['28.8px', '33.6px', '33.6px']}
            color="#282828"
          >
            {t('info')}
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            {t('work')}
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            {t('gobernance')}
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            {t('developers')}
          </Text>
        </Box>

        <Box width={['45%', '20%', '20%']}>
          <Text
            fontSize={['24px', '28px', '28px']}
            lineHeight={['28.8px', '33.6px', '33.6px']}
            letterSpacing={'5px'}
            color="#282828"
          >
            {t('products')}
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            Delta Neutral
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            Stake Farming
          </Text>

          <Text
            fontSize={['16px', '24px', '24px']}
            lineHeight={['19.2px', '28.8px', '28.8px']}
            color="grayLetter"
            paddingTop={2}
          >
            Recursive Farming
          </Text>
        </Box>

        <Box width={'40%'} display={['none', 'block', 'block']}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'5px'}
            color="#282828"
          >
            {t('touch')}
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            color="grayLetter"
            paddingTop={2}
          >
            {t('touchMessage')}
          </Text>

          <InputGroup paddingTop={2}>
            <Input
              bg="white"
              type={'text'}
              placeholder={t('email')}
              border={'0'}
              borderRadius={'32px'}
              height={'64px'}
              boxShadow={'0px 0px 55px rgba(0, 0, 0, 0.1)'}
            />

            <InputRightElement width={'148px'} paddingTop={10} marginRight={2}>
              <Button bg="primary" borderRadius={'24px'}>
                <Text
                  fontSize={'22px'}
                  lineHeight={'26.4px'}
                  letterSpacing={'2px'}
                  color="white"
                >
                  {t('suscribe')}
                </Text>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Wrap>

      <Box marginTop={[5, 5, 5]} paddingLeft={[5, 100, 100]} width="20%">
        <Link
          href="https://github.com/defiforpeople/chainlink-hackathon"
          isExternal
        >
          <GithubLogo href="" />
        </Link>
      </Box>

      <Flex marginTop={5} paddingLeft={[5, 100, 100]}>
        <Text fontWeight={400} fontSize={'14'} color="grayLetter">
          {t('changeLanguage')}&nbsp;
        </Text>
        <Text
          fontWeight={400}
          fontSize={'14'}
          color="sixth"
          onClick={changeLanguage}
          _hover={{ cursor: 'pointer' }}
        >
          {i18n.language === 'en' ? 'Español 🇪🇸' : 'English 🇺🇸'}
        </Text>
      </Flex>

      <Box
        marginTop={['20px', '30px', '30px']}
        paddingBottom={'20px'}
        paddingLeft={[5, 100, 100]}
      >
        <Text
          fontSize={['16px', '24px', '24px']}
          lineHeight={['19.2px', '28.8px', '28.8px']}
          color="grayLetter"
        >
          {t('copyright')}
        </Text>
      </Box>
    </Box>
  );
}

export default FooterLanding;
