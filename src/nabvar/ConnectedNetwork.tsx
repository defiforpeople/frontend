import React from 'react';

import { Box, Icon } from '@chakra-ui/react';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function ConnectedNetwork(props: any) {
  return (
    <Box verticalAlign="top">
      {props.chainId}

      <Icon
        as={RadioButtonCheckedIcon}
        w={2.5}
        h={2.5}
        color="green"
        marginLeft={2}
      />
    </Box>
  );
}

export default ConnectedNetwork;
