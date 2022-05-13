import { Global } from '@emotion/react';

import './assets/fonts/Louis-George-Cafe.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Light.ttf') format('ttf');
        font-weight: lighter;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Light-Italic.ttf') format('ttf');
        font-weight: lighter;
        font-style: italic;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Italic.ttf') format('ttf');
        font-style: italic;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Bold.ttf') format('ttf');
        font-weight: bold;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Bold-Italic.ttf') format('ttf');
        font-weight: bold;
        font-style: italic;
      }
    `}
  />
);

export default Fonts;
