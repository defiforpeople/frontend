import React from 'react';

import { useMoralis } from 'react-moralis';

import ConnectWallet from './ConnectWallet';

function Dashboard() {
  const { isAuthenticated } = useMoralis();

  return isAuthenticated ? (
    <p>Wena autenticado choro aqui</p>
  ) : (
    <ConnectWallet />
  );
}

export default Dashboard;
