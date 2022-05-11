import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import Menu from './Menu';

function DashboardBody() {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)">
      <GridItem rowSpan={2} colSpan={1}>
        <Menu />
      </GridItem>

      <GridItem colSpan={2} bg="papayawhip">
        wena
      </GridItem>

      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" />
    </Grid>
  );
}

export default DashboardBody;
