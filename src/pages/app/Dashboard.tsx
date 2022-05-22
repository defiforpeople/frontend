import React from 'react';

import { useMoralis } from 'react-moralis';

import ConnectWallet from './ConnectWallet';
import DashboardBody from './DashboardBody';

function Dashboard() {
  const { isAuthenticated } = useMoralis();

  return isAuthenticated ? <DashboardBody /> : <ConnectWallet />;
}

export default Dashboard;
