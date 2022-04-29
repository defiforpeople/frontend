function Networks(chainId: string): string {
  if (chainId === '0x1') {
    return 'Ethereum';
  }

  if (chainId === '0x89') {
    return 'Polygon';
  }

  if (chainId === '0x38') {
    return 'BNB Chain';
  }

  if (chainId === '0xa86a') {
    return 'Avalanche';
  }

  if (chainId === '0xfa') {
    return 'Fantom';
  }

  return '';
}

export default Networks;
