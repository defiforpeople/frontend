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
import calculateInvesment from '../../../utils/calculateInvesment';

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
  value: string;
  setValue: any;
  monthlyAmount: string;
  setMonthlyAmount: any;
  time: number;
  setTime: any;
  setSimulateState: any;
  setSimulationData: any;
  simulationData: any;
};

export function SimulationChart({
  value,
  setValue,
  monthlyAmount,
  setMonthlyAmount,
  time,
  setTime,
  setSimulateState,
  setSimulationData,
  simulationData,
}: Props) {
  const handleChangeValue = (event: any) => {
    setValue(event.target.value);
    setSimulationData(
      calculateInvesment(
        time,
        Number(event.target.value),
        Number(monthlyAmount),
        0.1,
      ),
    );
  };

  const handleChangeMonthlyAmount = (event: any) => {
    setMonthlyAmount(event.target.value);
    setSimulationData(
      calculateInvesment(time, Number(value), Number(event.target.value), 0.1),
    );
  };

  const simulate = (time: number) => {
    setTime(time);
    setSimulationData(
      calculateInvesment(time, Number(value), Number(monthlyAmount), 0.1),
    );
  };

  const data = () => {
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
        <Text paddingLeft={5}> En {time} años podrías tener:</Text>
        <Text paddingRight={5} fontSize={'12px'} color={'primary'}>
          Cómo se calcula?
        </Text>
      </HStack>

      <Text
        paddingLeft={5}
        fontWeight="bold"
        fontSize={'26px'}
        color={'primary'}
      >
        {(
          (simulationData.optimisticRevenue[simulationData.labels.length - 1] +
            simulationData.pessimisticRevenue[
              simulationData.labels.length - 1
            ]) /
          2
        ).toFixed(0)}
      </Text>

      <HStack>
        <Box>
          <Text
            paddingLeft={5}
            paddingTop={5}
            fontSize={'14px'}
            color={'primary'}
          >
            Resultado optimista:
          </Text>

          <Text
            paddingLeft={5}
            fontWeight="bold"
            fontSize={'16px'}
            color={'primary'}
          >
            {simulationData.optimisticRevenue[
              simulationData.labels.length - 1
            ].toFixed(0)}
          </Text>
        </Box>

        <Box paddingLeft={30}>
          <Text
            paddingTop={5}
            fontSize={'14px'}
            color={'primary'}
            opacity={0.8}
          >
            Resultado pesimista:
          </Text>

          <Text
            fontWeight="bold"
            fontSize={'16px'}
            color={'primary'}
            opacity={0.8}
          >
            {simulationData.pessimisticRevenue[
              simulationData.labels.length - 1
            ].toFixed(0)}
          </Text>
        </Box>
      </HStack>

      <Text paddingLeft={5} paddingTop={5} fontSize={'14px'} color={'sixth'}>
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
          value={monthlyAmount}
          onChange={handleChangeMonthlyAmount}
          placeholder="$ 0 USDT"
          borderRadius={'12px'}
          focusBorderColor="primary"
        />
      </Box>

      <Box width={'100%'} padding={8}>
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
          onChangeEnd={(val) => simulate(val)}
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
