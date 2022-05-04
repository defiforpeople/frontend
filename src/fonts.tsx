import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe.ttf');
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Light.ttf');
        font-weight: lighter;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Light-Italic.ttf');
        font-weight: lighter;
        font-style: italic;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Italic.ttf');
        font-style: italic;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Bold.ttf');
        font-weight: bold;
      }
      @font-face {
        font-family: 'Louis George Cafe';
        src: url('./assets/fonts/Louis-George-Cafe-Bold-Italic.ttf');
        font-weight: bold;
        font-style: italic;
      }
    `}
  />
);

export default Fonts;
