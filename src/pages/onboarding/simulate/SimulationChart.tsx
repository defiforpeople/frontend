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
          order: 2,
        },
        {
          data: [1, 1, 2, 4, 12, 25, 50],
          borderColor: '#F72585',
          pointRadius: 0,
          borderWidth: 0,
          tension: 0.4,
          fill: true,
          backgroundColor: 'white',
          order: 1,
        },
      ],
    };
  };

  return (
    <Box height={'300px'} width={'100%'}>
      <Line options={options} data={data()} />
    </Box>
  );
}

export default SimulationChart;
