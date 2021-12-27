import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Warn Triangle' },
  { id: 1, name: 'Welcome Packages' },
  { id: 2, name: 'Onboard Tools' },
  { id: 3, name: 'Tire Repair Kit' },
  { id: 4, name: 'Ignition Key' },
];

export default function SparePartsDamage() {

  return (
    <Box sx={{ width:'100%', height: '100%'}}>

      <List
        sx={{ height: 812, width: 375 }}
        subheader={<div />}
      >
    <ListSubheader >
    <Paper component='div' elevation={0} sx={{position:'fixed', padding: 2, width: '100%'}}>
            <Typography variant="h4"
              sx={{fontWeight: 'bold' }} 
            >
              Spare Parts
            </Typography>
        </Paper>
        <Box sx={{height: 80}}></Box>
    </ListSubheader>
          {
        DAMAGETYPES.map((damage) => (
          <ListItem key={damage.id} component="div">
              <CustomSwitch title={damage.name}></CustomSwitch>
          </ListItem>
          ))
      }
      </List>
    </Box>
  );
}