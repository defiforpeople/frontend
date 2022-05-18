import React from 'react';

import { Link } from 'react-router-dom';
import {
  Flex,
  Text,
  Button,
  HStack,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';

import Logo from '../../components/logo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HamburgerIcon } from '@chakra-ui/icons';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import DrawerNavbar from '../../navbar/DrawerNavbar';


function NavbarLanding() {
  const { t } = useTranslation('NavbarLanding');

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify={['space-between', 'space-around', 'space-around']}
      bg="#F1F4F6"
      height={'76px'}
      align="center"
      alignItems={'center'}
    >
      <HamburgerIcon
        w={6}
        h={6}
        color="grayLetter"
        display={['block', 'none', 'none']}
        marginLeft={3}
        onClick={onOpen}
      />

      <DrawerNavbar isOpen={isOpen} onClose={onClose} />

      <Flex>
        <Logo w={160} h={10} color="#3A0CA3" />
      </Flex>

      <Text
        fontSize={'18'}
        lineHeight={'21.6px'}
        color="grayLetter"
        display={['none', 'block', 'block']}
      >
        {t('how')}
      </Text>

      <Text
        fontSize={'18'}
        lineHeight={'21.6px'}
        color="grayLetter"
        display={['none', 'block', 'block']}
      >
        {t('gobernance')}
      </Text>

      <HStack display={['none', 'inherit', 'inherit']}>
        <Text fontSize={'18'} lineHeight={'21.6px'} color="grayLetter">
          {t('more')}
        </Text>

        <Icon as={KeyboardArrowDownIcon} />
      </HStack>

      <Flex flexDirection="row" alignItems="center" justifyContent="center">
        <Link to="/app">
          <Text
            fontSize={'18'}
            lineHeight={'21.6px'}
            color="primary"
            marginRight={10}
            display={['none', 'block', 'block']}
          >
            {t('enter')}
          </Text>
        </Link>

        <Flex paddingRight={3}>
          <Button
            bg={'primary'}
            borderRadius={'70'}
            height={['32px', '50px', '50px']}
          >
            <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
              {t('begin')}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavbarLanding;
