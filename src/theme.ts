import { extendTheme } from '@chakra-ui/react';

import '@fontsource/gowun-dodum';

const theme = extendTheme({
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
  },
  fonts: {
    body: '"Gowun Dodum", sans-serif',
    heading: '"Roboto", sans-serif',
  },
});

export default theme;
