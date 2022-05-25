import { Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { ReactComponent as WalletIcon } from '../../assets/logos/wallet-icon.svg';

import { useTranslation } from 'react-i18next';
import '../../i18n';

function ConnectWalletOnboarding() {
  const { t, i18n } = useTranslation('connectWallet');

  return (
    <Center>
      <Box
        bg={'white'}
        borderRadius={15}
        height={['300px', '356px', '356px']}
        width={['80%', '80%', '800px']}
      >
        <Box marginTop={10}>
          <Center>
            <WalletIcon width={80} height={80} />
          </Center>
        </Box>

        <Center margin={5}>
          <Text
            fontWeight={700}
            fontSize={'22'}
            letterSpacing={'5px'}
            lineHeight={'26.4px'}
          >
            {t('connectWallet')}
          </Text>
        </Center>

        <Center margin={5}>
          <Text
            fontWeight={400}
            fontSize={'18'}
            lineHeight={'21.6px'}
            color="grayLetter"
            textAlign={'center'}
          >
            {t('message')}
          </Text>
        </Center>

        <Center margin={5}>
          <Button
            bg={'primary'}
            color="white"
            borderRadius={70}
            // onClick={login}
          >
            <Text fontWeight={400} fontSize={'18px'} lineHeight={'21.6px'}>
              {t('connect')}
            </Text>
          </Button>
        </Center>
      </Box>
    </Center>
  );
}

export default ConnectWalletOnboarding;
