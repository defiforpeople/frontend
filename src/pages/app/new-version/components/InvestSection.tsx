import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import TokenSelector from './TokenSelector';

function InvestSection() {
  const [amount, setAmount] = useState(0);

  return (
    <Box width={'600px'}>
      <HStack>
        <TokenSelector />

        <Box>
          <HStack justifyContent={'space-between'} width={'100%'}>
            <Text
              fontWeight={700}
              fontSize={'16px'}
              lineHeight={'18.75px'}
              letterSpacing="5%"
              color={'#282828'}
            >
              Amount
            </Text>

            {!false ? (
              <Text
                fontSize={'12px'}
                lineHeight={'14.06px'}
                color={'grayLetter'}
              >
                Available: {0.0}
              </Text>
            ) : (
              <Spinner marginTop={25} color="#E33E84" size={'xs'} />
            )}
          </HStack>

          <InputGroup
            boxShadow={'0px 4px 14px rgba(0, 0, 0, 0.1)'}
            borderRadius={'8px'}
            height={'50px'}
          >
            <Input
              type="number"
              border={'0'}
              focusBorderColor="white"
              value={amount}
              onChange={(event: any) => setAmount(event.target.value)}
              margin={'auto'}
              size={'lg'}
            />
            <InputRightElement width="30">
              <Button
                height={'24px'}
                border="1px"
                borderColor="primary"
                borderRadius={'53px'}
              >
                <Text
                  fontWeight={400}
                  fontSize={'14px'}
                  lineHeight={'16.8px'}
                  color={'primary'}
                >
                  Max
                </Text>
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </HStack>

      <Center>
        <Button
          bg={'third'}
          borderRadius={'10'}
          width="120px"
          marginTop={'20px'}
        >
          <Text fontSize={'18'} lineHeight={'21.6px'} color="white">
            Invest
          </Text>
        </Button>
      </Center>
    </Box>
  );
}

export default InvestSection;
