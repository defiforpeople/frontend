import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import Menu from './Menu';
import Summary from './Summary';

function DashboardBody() {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)">
      <GridItem rowSpan={2} colSpan={1}>
        <Menu />
      </GridItem>

      <GridItem rowSpan={2} colSpan={4} bg="papayawhip">
        <Summary />
      </GridItem>
    </Grid>
  );
}

export default DashboardBody;
