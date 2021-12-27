import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Left Headlights' },
  { id: 1, name: 'Right Headlights' },
  { id: 2, name: 'Front Bumper Left' },
  { id: 3, name: 'Front Bumper Right' },
  { id: 4, name: 'Left Mirror' },
  { id: 5, name: 'Front Left Door' },
  { id: 6, name: 'Rear Left Door' },
  { id: 7, name: 'Front Left Fender' },
  { id: 8, name: 'Rear Left Fender' },
  { id: 9, name: 'Body Cill Right Front' },
  { id: 10, name: 'Body Cill Right Rear' },
  { id: 11, name: 'Right Mirror' },
  { id: 12, name: 'Hood' },
  { id: 13, name: 'Roof' },
  { id: 14, name: 'Left Taillights' },
  { id: 15, name: 'Right Taillights' },
  { id: 16, name: 'Rear Bumper Left' },
  { id: 17, name: 'Rear Bumper Right' },
  { id: 18, name: 'Wheel Left Front' },
  { id: 19, name: 'Wheel Left Rear' },
  { id: 20, name: 'Wheel Right Front' },
  { id: 21, name: 'Wheel Right Rear' },
  { id: 22, name: 'Left Front Fog Light' },
  { id: 23, name: 'Right Front Fog Light' },
  { id: 24, name: 'Radiator Grille Front' },
  { id: 25, name: 'A Pillar Left' },
  { id: 26, name: 'B Pillar Left' },
  { id: 27, name: 'C Pillar Left' },
  { id: 28, name: 'A Pillar Right' },
  { id: 29, name: 'B Pillar Right' },
  { id: 30, name: 'C Pillar Right' },
  { id: 31, name: 'Trunk' },
  { id: 32, name: 'Trunk Left' },
  { id: 33, name: 'Trunk Right' },
  { id: 34, name: 'Quarter Panel Left Rear' },
  { id: 35, name: 'Quarter Panel Right Rear' },
  { id: 36, name: 'Rear Right Panel' },
  { id: 37, name: 'Rear Left Panel' },
  { id: 38, name: 'Wiper Front' },
  { id: 39, name: 'Wiper Back' },
];

export default function ExteriorDamage() {

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
              Exterior Damages
            </Typography>
        </Paper>
        <Box sx={{height: 80}}></Box>
    </ListSubheader>
          {
        DAMAGETYPES.map((damage) => (
          <ListItem key={damage.id} component="div">
            <ListItemButton>
              <CustomSwitch title={damage.name}></CustomSwitch>
            </ListItemButton>
          </ListItem>
          ))
      }
      </List>
    </Box>
  );
}