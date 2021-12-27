import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Red Brake System' },
  { id: 1, name: 'Red Battery' },
  { id: 2, name: 'Red Oil Level' },
  { id: 3, name: 'Red Coolant Temperature' },
  { id: 4, name: 'Red Airbags' },
  { id: 5, name: 'Yellow Brake Wear' },
  { id: 6, name: 'Yellow Engine Control' },
  { id: 7, name: 'Yellow Tire Pressure' },
  { id: 8, name: 'Yellow ABS' },
  { id: 9, name: 'Fuel Display' },
  { id: 10, name: 'Exhaust System' },
  { id: 11, name: 'Electric Door Locking System' },
  { id: 12, name: 'Driver Assistence System' },
  { id: 13, name: 'Cruise Control' },
  { id: 14, name: 'Multi Media System' },
  { id: 15, name: 'Navigation System' },
  { id: 16, name: 'Heating' },
  { id: 17, name: 'Air Conditioning' },
  { id: 18, name: 'Cigarette lighter' },
  { id: 19, name: 'Gearbox' },
  { id: 20, name: 'Engine' },
  { id: 21, name: 'High Voltage Battery' },
];

export default function TechnicalDefect() {

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
              Technical Defect
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