import React from 'react';

import { Route, Routes } from 'react-router-dom';

import DefiForPeopleApp from './dashboard/DefiForPeopleApp';

import Landing from './landing/Landing';
import Onboarding from './onboarding/Onboarding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<DefiForPeopleApp />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
