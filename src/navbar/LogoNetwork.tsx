import React from 'react';

import { ReactComponent as EthereumLogo } from '../assets/logos/ethereum-logo.svg';
import { ReactComponent as PolygonLogo } from '../assets/logos/polygon-logo.svg';
import { ReactComponent as BnbChainLogo } from '../assets/logos/bnbchain-logo.svg';
import { ReactComponent as AvalancheLogo } from '../assets/logos/avalanche-logo.svg';
import { ReactComponent as FantomLogo } from '../assets/logos/fantom-logo.svg';

function LogoNetwork(props: any) {
  if (props.chainId === '0x1') {
    return <EthereumLogo width={25} height={25} />;
  }

  if (props.chainId === '0x89') {
    return <PolygonLogo width={25} height={25} />;
  }

  if (props.chainId === '0x38') {
    return <BnbChainLogo width={25} height={25} />;
  }

  if (props.chainId === '0xa86a') {
    return <AvalancheLogo width={25} height={25} />;
  }

  if (props.chainId === '0xfa') {
    return <FantomLogo width={25} height={25} />;
  }

  return <EthereumLogo width={25} height={25} />;
}

// export const LOGO_NETWORK = {
//   '0x01': <EthereumLogo width={25} height={25} />,
//   '0x89': <PolygonLogo width={25} height={25} />,
//   '0x38': <BnbChainLogo width={25} height={25} />,
//   '0xa86a': <AvalancheLogo width={25} height={25} />,
//   '0xfa': <FantomLogo width={25} height={25} />,
// };

export default LogoNetwork;
