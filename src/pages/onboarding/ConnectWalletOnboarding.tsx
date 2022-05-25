import React from 'react';

import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';

import { ReactComponent as WalletIcon } from '../../assets/logos/wallet-icon.svg';

import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

        <Center marginTop={5}>
          <Box
            width={'100%'}
            borderRadius={20}
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          >
            <Center paddingTop={5}>
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

            {/* <Divider paddingTop={5} color="red" /> */}

            <HStack margin={'auto'} paddingTop={5}>
              <Icon as={VisibilityIcon} margin={3} />

              <Text color={'grayLetter'} fontSize={'14'} paddingRight={1}>
                View only permissions. We will never do anything without your
                approval.
              </Text>
            </HStack>

            <HStack>
              <Icon as={FavoriteIcon} margin={3} />

              <Text color={'grayLetter'} fontSize={'14'}>
                Trusted by 10 users
              </Text>
            </HStack>
          </Box>
        </Center>
      </Box>
    </Center>
  );
}

export default ConnectWalletOnboarding;
