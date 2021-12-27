import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List, ListSubheader, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Header'

const AREAS = [
  { id: 0, name: 'Exterior', route: '/exterior'},
  { id: 1, name: 'Interior', route: '/interior'},
  { id: 2, name: 'Windows', route: '/windows'},
  { id: 3, name: 'Tires', route: '/tires'},
  { id: 4, name: 'Technical Defect', route: '/technical-defect'},
  { id: 5, name: 'Spare Parts / Loss / Defect', route: '/spare-parts'},
];

//TODO: Switchign the state needs to do something
export default function DamageScreen() {

  return (
    <Box sx={{ width:'100%', height: '100%'}}>
    <Header header="Inbound Check"
                screenTitle="Damage Overview"
                screenDescription="Please click on the different inbound check steps to complete them"
                progress={0}/>
      <List
        sx={{ height: 812, width: 375 }}
        subheader={<div />}
      >
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