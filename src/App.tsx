import React from 'react';

import { Route, Routes } from 'react-router-dom';

import DefiForPeopleApp from './dashboard/DefiForPeopleApp';

import Landing from './landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<DefiForPeopleApp />} />
    </Routes>
  );
}

export default App;
