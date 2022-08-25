import { Center, Flex } from '@chakra-ui/react';

import FooterApp from '../../footers/FootersApp';
import NavbarApp from '../../navbar/NavbarApp';
import InvestSection from '../components/InvestSection';

function Lending() {
  return (
    <Flex display={'flex'} flexDirection="column" height={'100vh'}>
      <NavbarApp />
      <Center marginTop={'100px'}>
        <InvestSection />
      </Center>
      <FooterApp />
    </Flex>
  );
}

export default Lending;
