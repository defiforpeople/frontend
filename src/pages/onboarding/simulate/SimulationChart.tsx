import React from 'react';

import { Box } from '@chakra-ui/react';

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
  },
};

type Props = {
  periods: number;
};

export function SimulationChart({ periods }: Props) {
  const data = {
    labels: ['Hoy', '', '', '', '', '', `${periods} años`],
    datasets: [
      {
        data: [1, 2, 4, 8, 16, 32, 64],
        borderColor: '#F72585',
        pointRadius: 0,
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        backgroundColor: '#F72585',
      },
      // {
      //   label: 'Dataset 1',
      //   data: [1, 1, 2, 4, 12, 25, 50],
      //   borderColor: '#F72585',
      //   pointRadius: 0,
      //   borderWidth: 2,
      //   tension: 0.4,
      // },
    ],
  };

  return (
    <Box height={'300px'} width={'100%'}>
      <Line options={options} data={data} />
    </Box>
  );
}

export default SimulationChart;
