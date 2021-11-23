import * as React from 'react';
import Switch from '@mui/material/Switch';
import { Grid, Typography } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchDefault() {
  return (
    <Grid className="grid_switch" >
      <Typography id="active" gutterBottom>
        Active
      </Typography>
       <Switch {...label} defaultChecked className="switch"/>
    </Grid>
  );
}