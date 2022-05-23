import React from 'react';

import {
  Box,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';

function Simulate() {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);

  return (
    <Box width={'100%'}>
      <Box>
        <Text
          paddingTop={10}
          paddingLeft={10}
          fontWeight={'bold'}
          fontSize={'22px'}
        >
          Cuánto quieres invertir?
        </Text>
      </Box>

      <Box width={'100%'} padding={5}>
        <Text fontWeight={'light'} fontSize={'15px'}>
          Si partieras hoy con:
        </Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="$ 0 USDT"
          borderRadius={'12px'}
          focusBorderColor="primary"
        />
      </Box>

      <Box width={'100%'} padding={5}>
        <HStack justifyContent={'space-between'}>
          <Text fontWeight={'light'} fontSize={'15px'}>
            Durante
          </Text>

          <Text fontWeight={'light'} fontSize={'15px'}>
            7 años
          </Text>
        </HStack>
        <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb>
            <Box bg="tomato">a</Box>
          </SliderThumb>
        </Slider>
      </Box>
    </Box>
  );
}

export default Simulate;
