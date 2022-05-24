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

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export const options = {
  responsive: true,

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

type Props = {
  periods: number;
  simulationData: any;
};

export function SimulationChart({ periods, simulationData }: Props) {
  console.log(simulationData);

  const recommendedMinTime = 3;

  const [value, setValue] = React.useState('');

  const [montlyAmount, setMontlyAmount] = React.useState('');

  const [time, setTime] = React.useState(recommendedMinTime);

  const handleChangeValue = (event: any) => setValue(event.target.value);

  const handleChangeMonthlyAmount = (event: any) =>
    setMontlyAmount(event.target.value);

  const data = () => {
    console.log('aca', simulationData);
    return {
      labels: simulationData.labels,
      datasets: [
        {
          data: simulationData.optimisticRevenue,
          borderColor: '#F72585',
          pointRadius: 0,
          borderWidth: 0,
          tension: 0.4,
          fill: true,
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(247, 37, 132, 0)');
            gradient.addColorStop(1, 'rgba(247, 37, 132, 0.6)');
            return gradient;
          },
          order: 3,
        },
        {
          data: simulationData.pessimisticRevenue,
          borderColor: '#F72585',
          pointRadius: 0,
          borderWidth: 0,
          tension: 0.4,
          fill: true,
          backgroundColor: 'white',
          order: 2,
        },
        {
          data: simulationData.invested,
          borderColor: '#3A0CA3',
          pointRadius: simulationData.borderRadius,
          borderWidth: 2,
          tension: 0.3,
          order: 1,
        },
      ],
    };
  };

  return (
    <Box width={'100%'}>
      <HStack justifyContent={'space-between'} paddingTop={10}>
        <Text paddingLeft={5}> En {periods} años podrías tener:</Text>
        <Text paddingRight={5} fontSize={'12px'} color={'primary'}>
          Cómo se calcula?
        </Text>
      </HStack>

      <Text
        paddingLeft={5}
        fontWeight="bold"
        fontSize={'18px'}
        color={'primary'}
      >
        {(
          (simulationData.optimisticRevenue[simulationData.labels.length - 1] +
            simulationData.pessimisticRevenue[
              simulationData.labels.length - 1
            ]) /
          2
        ).toFixed(2)}
      </Text>

      <Text paddingLeft={5} paddingTop={5} fontSize={'14px'}>
        Dinero invertido:
      </Text>

      <Text paddingLeft={5} fontWeight="bold" fontSize={'16px'} color={'sixth'}>
        {simulationData.invested[simulationData.labels.length - 1]}
      </Text>

      <Line options={options} data={data()} />

      <Text fontWeight="bold" fontSize={'16px'} paddingLeft={5} paddingTop={5}>
        ⚖️ Ajusta tu objetivo
      </Text>

      <Box width={'100%'} paddingLeft={5} paddingRight={5} paddingTop={3}>
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

      <Box width={'100%'} paddingLeft={5} paddingRight={5} paddingTop={3}>
        <Text fontWeight={'light'} fontSize={'15px'}>
          Y al mes depositaras
        </Text>
        <Input
          type={'number'}
          value={montlyAmount}
          onChange={handleChangeMonthlyAmount}
          placeholder="$ 0 USDT"
          borderRadius={'12px'}
          focusBorderColor="primary"
        />
      </Box>

      <Box width={'100%'} paddingLeft={5} paddingTop={10}>
        <HStack justifyContent={'space-between'}>
          <Text fontWeight={'light'} fontSize={'15px'}>
            Durante
          </Text>

          <Text fontWeight={'light'} paddingRight={5} fontSize={'15px'}>
            {time} años
          </Text>
        </HStack>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={3}
          min={0}
          max={10}
          step={1}
          onChangeEnd={(val) => setTime(val)}
        >
          <SliderTrack bg="#E5E4E5">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb bg="primary"></SliderThumb>
        </Slider>
      </Box>

      <Center marginTop={'60px'} marginBottom={'50px'}>
        <Button
          bg="primary"
          boxShadow="0px 2px 3px rgba(0, 0, 0, 0.15)"
          borderRadius={'15px'}
        >
          <Text color={'white'}>Me gusta esta simulacion</Text>
        </Button>
      </Center>
    </Box>
  );
}

export default SimulationChart;
