import React from 'react';

import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import { Link } from 'react-router-dom';

function SectionOne() {
  const { t } = useTranslation('SectionOne');

  return (
    <Box bgGradient="linear(to-t, #FF99C8, #A9DEF9)" width="100%">
      <Center>
        <Flex flexDirection={'column'} alignItems="center">
          <Text
            fontSize={['40px', '55px', '55px']}
            lineHeight={['48px', '66px', '66px']}
            color="#282828"
            marginTop={['20px', '100px', '100px']}
            textAlign="center"
          >
            DeFi es simple
          </Text>

          <Text
            fontSize={['18px', '22px', '22px']}
            lineHeight={['21.6px', '28.8px', '28.8ppx']}
            color="grayLetter"
            textAlign="center"
            marginTop={'23px'}
            padding={['10px', '0px', '0px']}
            width={['90%', '600px', '600px']}
          >
            En DeFi for People buscamos ayudar a los usuarios a enteder DeFi y
            sus funciones
          </Text>

          <Link to="/onboarding">
            <Button
              bg={'primary'}
              borderRadius={'70'}
              width="200px"
              marginTop={['30px', '50px', '50px']}
              marginBottom={['30px', '50px', '50px']}
            >
              <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
                {t('button')}
              </Text>
            </Button>
          </Link>

          {/* <PhoneImage width={'100%'} height={'100%'} /> */}
        </Flex>
      </Center>
    </Box>
  );
}

export default SectionOne;
