import React from 'react';

import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import calculateInvesment from '../../../utils/calculateInvesment';

type Props = {
  setSimulateState: any;
  setSimulationData: any;
};

function Simulate({ setSimulateState, setSimulationData }: Props) {
  const recommendedMinTime = 3;

  const [value, setValue] = React.useState('');

  const [monthlyAmount, setMonthlyAmount] = React.useState('');

  const [time, setTime] = React.useState(recommendedMinTime);

  const handleChangeValue = (event: any) => setValue(event.target.value);

  const handleChangeMonthlyAmount = (event: any) =>
    setMonthlyAmount(event.target.value);

  const simulate = () => {
    setSimulationData(
      calculateInvesment(time, Number(value), Number(monthlyAmount), 0.1),
    );
    setSimulateState('simulate');
  };

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
          Si partieras hoy con
        </Text>
        <Input
          type={'number'}
          value={value}
          onChange={handleChangeValue}
          placeholder="$ 0 USDT"
          borderRadius={'12px'}
          focusBorderColor="primary"
        />
      </Box>

      <Box width={'100%'} padding={5}>
        <Text fontWeight={'light'} fontSize={'15px'}>
          Y al mes depositaras
        </Text>
        <Input
          type={'number'}
          value={monthlyAmount}
          onChange={handleChangeMonthlyAmount}
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
            {time} años
          </Text>
        </HStack>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={3}
          min={0}
          max={40}
          step={1}
          onChangeEnd={(val) => setTime(val)}
        >
          <SliderTrack bg="#E5E4E5">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bg="primary"></SliderThumb>
        </Slider>
      </Box>

      <Center marginTop={'50px'}>
        <Button
          onClick={simulate}
          isDisabled={value === ''}
          bg="primary"
          boxShadow="0px 2px 3px rgba(0, 0, 0, 0.15)"
          borderRadius={'15px'}
        >
          <Text color={'white'}>Continuar</Text>
        </Button>
      </Center>
    </Box>
  );
}

export default Simulate;