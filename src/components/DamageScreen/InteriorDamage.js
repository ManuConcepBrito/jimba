import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Cigarette Lighter' },
  { id: 1, name: 'Entrance Step Right' },
  { id: 2, name: 'Interior Left' },
  { id: 3, name: 'Interior Right' },
  { id: 4, name: 'Seat Front Right' },
  { id: 5, name: 'Seat Front Left' },
  { id: 6, name: 'Inside Mirror' },
  { id: 7, name: 'Floor Mats' },
  { id: 8, name: 'Onboard Tools' },
  { id: 9, name: 'Tire Repair Kit' },
  { id: 10, name: 'Security Belt' },
];

export default function InteriorDamage() {

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
              Interior Damages
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