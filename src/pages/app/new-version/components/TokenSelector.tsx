import { useState } from 'react';

import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { ReactComponent as EthLogo } from '../../../../assets/logos/eth-logo.svg';
import { ReactComponent as PolygonLogo } from '../../../../assets/logos/polygon-matic-icon.svg';
import { ReactComponent as DaiLogo } from '../../../../assets/logos/dai-logo.svg';

function TokenSelector() {
  const initialToken = 'MATIC';

  const [selectedToken, setSelectedToken] = useState(initialToken);

  const handleTokenChange = (token: string) => {
    setSelectedToken(token);
  };

  return (
    <Box width={'50%'}>
      <Text
        fontWeight={700}
        fontSize={'16px'}
        lineHeight={'18.75px'}
        letterSpacing="5%"
        color={'#282828'}
      >
        Token
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={true ? <ChevronDownIcon /> : <ChevronUpIcon />}
          boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
          borderRadius={'8px'}
          width={'100%'}
          height={'50px'}
        >
          <HStack>
            <Box
              display={selectedToken === 'MATIC' ? 'block' : 'none'}
              marginLeft={2}
            >
              <PolygonLogo width={25} height={25} />
            </Box>

            <Box display={selectedToken === 'DAI' ? 'block' : 'none'}>
              <DaiLogo width={25} height={25} />
            </Box>

            <Box display={selectedToken === 'ETH' ? 'block' : 'none'}>
              <EthLogo width={25} height={25} />
            </Box>

            <Text
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={selectedToken === initialToken ? '#666666' : 'black'}
            >
              {selectedToken}
            </Text>
          </HStack>
        </MenuButton>

        <MenuList border={'0'} minW="0" w={'200px'}>
          <MenuItem onClick={() => handleTokenChange('MATIC')}>
            <PolygonLogo width={25} height={25} />

            <Text
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'black'}
              padding={3}
            >
              MATIC
            </Text>
          </MenuItem>

          <MenuItem onClick={() => handleTokenChange('DAI')}>
            <DaiLogo width={25} height={25} />

            <Text
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'black'}
              padding={3}
            >
              DAI
            </Text>
          </MenuItem>

          <MenuItem onClick={() => handleTokenChange('DAI')}>
            <EthLogo width={25} height={25} />

            <Text
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'black'}
              padding={3}
            >
              ETH
            </Text>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default TokenSelector;
