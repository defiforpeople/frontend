import { Route, Routes } from 'react-router-dom';

import DefiForPeopleApp from './dashboard/DefiForPeopleApp';

import Landing from './landing/Landing';
import Onboarding from './onboarding/Onboarding';
import Building from './pages/building/Building';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<DefiForPeopleApp />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/building" element={<Building />} />
    </Routes>
  );
}

export default App;
