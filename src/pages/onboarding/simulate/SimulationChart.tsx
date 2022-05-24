import React from 'react';

import { Box, HStack, Text } from '@chakra-ui/react';

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
};

export function SimulationChart({ periods }: Props) {
  const data = () => {
    return {
      labels: ['Hoy', '', '', '', '', '', `${periods} años`],
      datasets: [
        {
          data: [1, 2, 4, 8, 16, 32, 64],
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
          data: [1, 1, 2, 4, 12, 25, 50],
          borderColor: '#F72585',
          pointRadius: 0,
          borderWidth: 0,
          tension: 0.4,
          fill: true,
          backgroundColor: 'white',
          order: 2,
        },
        {
          data: [1, 2, 3, 4, 5, 6, 7],
          borderColor: '#3A0CA3',
          pointRadius: [0, 0, 0, 0, 0, 0, 1],
          borderWidth: 2,
          tension: 0.3,
          order: 1,
        },
      ],
    };
  };

  return (
    <Box height={'300px'} width={'100%'}>
      <HStack justifyContent={'space-between'} paddingTop={10}>
        <Text paddingLeft={5}> En 35 años podrías tener:</Text>
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
        $ 274,814,192
      </Text>

      <Text paddingLeft={5} paddingTop={5} fontSize={'14px'}>
        Dinero invertido:
      </Text>

      <Text paddingLeft={5} fontWeight="bold" fontSize={'16px'} color={'sixth'}>
        $ 50,000,000
      </Text>

      <Line options={options} data={data()} />
    </Box>
  );
}

export default SimulationChart;
