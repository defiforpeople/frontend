import { Box, Button, Center, Text } from '@chakra-ui/react';
import { ReactComponent as WalletIcon } from '../../assets/logos/wallet-icon.svg';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import { useAdapter } from '../../hooks/use-adapter';

function ConnectWallet() {
  const { t, i18n } = useTranslation('connectWallet');

  const { adapter, isAuthenticated, setIsAuthenticated, setProfile } =
    useAdapter();

  // console.log('Its rendering ConnectWallet component');

  const login = async () => {
    if (!isAuthenticated) {
      try {
        const profile = await adapter.login(t('signingMessage'));
        setIsAuthenticated(true);
        setProfile(profile);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const changeLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <Box alignItems="baseline">
      <Box
        bg={'white'}
        borderRadius={15}
        height={['300px', '356px', '356px']}
        width={['80%', '80%', '800px']}
        position={'absolute'}
        left={'50%'}
        top={['30%', '50%', '50%']}
        transform={'translate(-50%, -50%)'}
        boxShadow={[
          '0px 0px 0px rgba(0, 0, 0, 0)',
          '0px 0px 10px rgba(0, 0, 0, 0.1)',
          '0px 0px 10px rgba(0, 0, 0, 0.1)',
        ]}
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
            onClick={login}
            display={['none', 'block', 'block']}
          >
            <Text fontWeight={400} fontSize={'18px'} lineHeight={'21.6px'}>
              {t('connect')}
            </Text>
          </Button>
        </Center>
      </Box>

      <Box
        position={['relative', 'relative', 'absolute']}
        top={['50%', '70%', '70%']}
        left={['16%', '40%', '35%', '41%']}
      >
        <Center>
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
        </Center>
      </Box>
    </Box>
  );
}

export default ConnectWallet;