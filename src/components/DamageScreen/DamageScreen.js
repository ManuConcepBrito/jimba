import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const AREAS = [
  { id: 0, name: 'Exterior', route: '/exterior'},
  { id: 1, name: 'Interior', route: '/interior'},
  { id: 2, name: 'Windows', route: '/windows'},
  { id: 3, name: 'Tires', route: '/tires'},
  { id: 4, name: 'Technical Defect', route: '/technical-defect'},
  { id: 5, name: 'Spare Parts / Loss / Defect', route: '/spare-parts'},
];

export default function DamageScreen() {

  return (
    <Box sx={{ width:'100%', height: '100%'}}>

      <List
        sx={{ height: 812, width: 375 }}
        subheader={<div />}
      >
    <ListSubheader >
    <Paper component='div' elevation={0} sx={{position:'fixed', padding: 2}}>
            <Typography variant="h4"
              sx={{fontWeight: 'bold' }} 
            >
              Damages
            </Typography>
        </Paper>
        <Box sx={{height: 80}}></Box>
    </ListSubheader>
          {
        AREAS.map((area) => (
          <ListItem key={area.id} component="div">
            <ListItemButton component={Link} to={area.route}>
              <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 5}}>
                <CardContent sx={{textAlign: 'center'}}>
                  <Typography gutterBottom variant="h5" component="div">
                    {area.name}
                  </Typography>
                </CardContent>
              </Card>
            </ListItemButton>
          </ListItem>
          ))
      }
      </List>
    </Box>
  );
}