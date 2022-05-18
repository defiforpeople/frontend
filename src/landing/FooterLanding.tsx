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
} from '@chakra-ui/react';

import Logo from '../components/logo';
import { ReactComponent as GithubLogo } from '../assets/logos/github-logo.svg';

import { useTranslation } from 'react-i18next';
import '../i18n';

function FooterLanding() {
  const { t, i18n } = useTranslation('connectWallet');

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <Box bg="#C4C4C405" height={'450px'}>
      <Box paddingTop={50} paddingLeft={100}>
        <Logo w={160} h={10} color="#3A0CA3" />
      </Box>

      <Flex flexDirection={'row'} paddingTop={5} paddingLeft={100}>
        <Box width={'20%'}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'tight'}
            color="#282828"
          >
            Info
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            How we work?
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Gobernance
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Developers
          </Text>
        </Box>

        <Box width={'20%'}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'5px'}
            color="#282828"
          >
            Products
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Delta Neutral
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Stake Farming
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            letterSpacing={'5px'}
            color="grayLetter"
            paddingTop={2}
          >
            Recursive Farming
          </Text>
        </Box>

        <Box width={'40%'}>
          <Text
            fontSize={'28px'}
            lineHeight={'33.6px'}
            letterSpacing={'5px'}
            color="#282828"
          >
            Get in touch
          </Text>

          <Text
            fontSize={'24px'}
            lineHeight={'28.8px'}
            color="grayLetter"
            paddingTop={2}
          >
            If you are interested in learning more about our products, we would
            love to connect with you.
          </Text>

          <InputGroup paddingTop={2}>
            <Input
              bg="white"
              type={'text'}
              placeholder="Email address"
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
                  Suscribe
                </Text>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>

      <Box paddingLeft={100}>
        <Link
          href="https://github.com/defiforpeople/chainlink-hackathon"
          isExternal
        >
          <GithubLogo />
        </Link>
      </Box>

      <Flex marginTop={5} paddingLeft={100}>
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

      <Box marginTop={'40px'} paddingLeft={100}>
        <Text
          fontSize={'24px'}
          lineHeight={'28.8px'}
          letterSpacing={'2px'}
          color="grayLetter"
        >
          Defi for People 2022 © All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

export default FooterLanding;
