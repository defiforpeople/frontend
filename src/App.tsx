import React from 'react';

import { Box } from '@chakra-ui/react';
import NavBar from './nabvar/NavBar';
import Portofolio from './portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Box w="100%" h="calc(100vh)" bg={'gray'}>
        <NavBar />
        <Portofolio />
      </Box>
    </div>
  );
}

export default App;
