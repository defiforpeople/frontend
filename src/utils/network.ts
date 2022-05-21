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

function getNativeToken(chainId: string): any {
  if (chainId === '0x1') {
    return {
      symbol: 'ETH',
      decimals: 18,
    };
  }

  if (chainId === '0x89') {
    return {
      symbol: 'MATIC',
      decimals: 18,
    };
  }

  if (chainId === '0x38') {
    return {
      symbol: 'BNB',
      decimals: 8,
    };
  }

  if (chainId === '0xa86a') {
    return {
      symbol: 'AVAX',
      decimals: 18,
    };
  }

  if (chainId === '0xfa') {
    return {
      symbol: 'FTM',
      decimals: 18,
    };
  }

  return {
    symbol: '',
    decimals: 0,
  };
}

export { Networks, getNativeToken };
