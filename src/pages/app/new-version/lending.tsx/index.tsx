import { Box, Center, Flex } from '@chakra-ui/react';

import FooterApp from '../../footers/FootersApp';
import NavbarApp from '../../navbar/NavbarApp';
import TokenSelector from '../components/TokenSelector';

function Lending() {
  return (
    <Flex display={'flex'} flexDirection="column" height={'100vh'}>
      <NavbarApp />
      <Center padding={'10%'}>
        <TokenSelector />
      </Center>
      <FooterApp />
    </Flex>
  );
}

export default Lending;
