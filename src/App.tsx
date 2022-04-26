import React from 'react';

import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box
        w="100%"
        h="calc(100vh)"
        bgGradient="linear(white 20%, primary, secondary, third, seventh , eighth, ninth, tenth)"
      ></Box>
    </div>
  );
}

export default App;
