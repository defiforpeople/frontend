import React from 'react';

import { Box, Icon } from '@chakra-ui/react';

import { useMoralis } from 'react-moralis';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function ConnectedNetwork(props: any) {
  const { isAuthenticated } = useMoralis();

  return (
    <Box width={'100%'}>
      {props.chainId}

      <Icon
        as={RadioButtonCheckedIcon}
        w={2.5}
        h={2.5}
        color={isAuthenticated ? 'green' : 'red'}
        marginLeft={2}
      />
    </Box>
  );
}

export default ConnectedNetwork;
