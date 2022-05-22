import { Box, Icon } from '@chakra-ui/react';

import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useNetworkManager } from '../../hooks/use-manager';

function ConnectedNetwork(props: { networkName: string }) {
  const { isAuthenticated } = useNetworkManager();

  return (
    <Box width={'100%'}>
      {props.networkName}
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
