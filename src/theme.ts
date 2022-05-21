import { extendTheme } from '@chakra-ui/react';

import { StepsStyleConfig } from 'chakra-ui-steps';

const CustomSteps = {
  ...StepsStyleConfig,
  baseStyle: (props: any) => {
    return {
      ...StepsStyleConfig.baseStyle(props),
      icon: {
        // ...StepsStyleConfig.baseStyle(props).icon,
        // your custom styles here
        strokeWidth: '1px',
      },
    };
  },
};

const theme = extendTheme({
  fonts: {
    heading: 'Louis George Cafe, sans-serif',
    body: 'Louis George Cafe, sans-serif',
    mono: 'Louis George Cafe, sans-serif',
  },
  colors: {
    primary: '#F72585',
    secondary: '#B5179E',
    third: '#7209B7',
    fourth: '#560BAD',
    fifth: '#480CA8',
    sixth: '#3A0CA3',
    seventh: '#3F37C9',
    eighth: '#4361EE',
    ninth: '#4895EF',
    tenth: '#4CC9F0',
    dark: '#191A32',
    gray: '#F1F4F6',
    grayLetter: '#757575',
    footerBg: '#C4C4C405',
  },
  components: {
    Steps: CustomSteps,
  },
});

export default theme;