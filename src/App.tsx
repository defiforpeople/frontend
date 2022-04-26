import React from 'react';

import { Box } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Box
        w="100%"
        h="calc(100vh)"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
      ></Box>
    </div>
  );
}

export default App;
