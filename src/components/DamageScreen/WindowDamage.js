import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import CustomSwitch from '../CustomSwitch';

const DAMAGETYPES = [
  { id: 0, name: 'Front Left Window' },
  { id: 1, name: 'Front Right Window' },
  { id: 2, name: 'Rear Right Window' },
  { id: 3, name: 'Rear Left Window' },
  { id: 4, name: 'Rear Window' },
  { id: 5, name: 'Front Windshield' },
];

export default function WindowDamage() {

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
              Window Damages
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