import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Tire Front Right' },
  { id: 1, name: 'Tire Front Left' },
  { id: 2, name: 'Tire Rear Right' },
  { id: 3, name: 'Tire Rear Left' },
  { id: 4, name: 'Tire Pressure Valve' },
];

export default function TireDamage() {

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
              Tire Damages
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