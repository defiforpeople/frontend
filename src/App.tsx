import React from 'react';

import { Box } from '@chakra-ui/react';
import NavBar from './nabvar/NavBar';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)">
        <NavBar />
      </Box>
    </div>
  );
}

export default App;
