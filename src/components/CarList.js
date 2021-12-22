import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FixedSizeList } from 'react-window';

const img = <image src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"></image>

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem component="div">
      <ListItemButton>
        <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 5}}>
          <CardContent sx={{textAlign: 'center'}}>
            <Typography gutterBottom variant="body1" component="div">
              ABCD1234
            </Typography>
            <Typography variant="body3" color="text.secondary">
              Tesla Model S
            </Typography>
            <Typography variant="body2" color="text.secondary">
              opened yesterday
            </Typography>
          </CardContent>
        </Card>
      </ListItemButton>
    </ListItem>
  );
}

export default function CarList() {
  return (
    <Box>
      <Box sx={{ margin: 3 }}>
        <Typography variant="h4"
          sx={{fontWeight: 'bold'}} 
        >
          Car List
        </Typography>
      </Box>
      <Box sx={{ width: '100%', height: '100%', bgcolor: 'background.paper' }}>
        <FixedSizeList
          height={812}
          width={375}
          itemSize={46}
          itemCount={200}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </Box>
  );
}