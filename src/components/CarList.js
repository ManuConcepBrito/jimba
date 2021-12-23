import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, InputLabel, List, ListSubheader, OutlinedInput, Paper } from '@mui/material';
import { useState } from 'react';

const CARS = [
  { id: 0, vin: '123456789', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 1, vin: '124124115', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 2, vin: '612312312', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 3, vin: '654169221', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 4, vin: '102342234', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 5, vin: '680124123', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 6, vin: '851203123', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 7, vin: '580123134', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 8, vin: '085124123', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
  { id: 9, vin: '981529384', lastOpened: 'yesterday', modelName: 'Tesla Model S' },
];

export default function CarList() {
  const [vin, setVin] = useState('');
  const [foundCars, setFoundCars] = useState(CARS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = CARS.filter((car) => {
        return car.vin.startsWith(keyword);
      });
      setFoundCars(results);
    } else {
      setFoundCars(CARS);
    }

    setVin(keyword);
  };

  console.log(foundCars)

  return (
    <Box sx={{ width:'100%', height: '100%'}}>
      <List
        sx={{ height: 812, width: 375 }}
        subheader={<div />}
      >
        <ListSubheader >
          <Paper component='div' elevation={0} sx={{position:'fixed', paddingTop: 2}}>
            <Typography variant="h4"
              sx={{fontWeight: 'bold', marginBottom: 3}} 
            >
              Car List
            </Typography>
            <FormControl>
            <InputLabel htmlFor="outlined-adornment-amount">Enter VIN</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={vin}
              onChange={filter}
              endAdornment={<InputAdornment position='end'><SearchIcon></SearchIcon></InputAdornment>}
              label="Enter VIN"
              sx={{ width: 342, borderRadius: 5}}
            />
            </FormControl>
          </Paper>
        </ListSubheader>
        <Box sx={{height: 150}}>

        </Box>
        {foundCars && foundCars.length > 0 ? (
        foundCars.map((car) => (
          <ListItem key={car.id} component="div">
            <ListItemButton>
              <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 5}}>
                <CardContent sx={{textAlign: 'center'}}>
                  <Typography gutterBottom variant="body1" component="div">
                    {car.vin}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.modelName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.lastOpened}
                  </Typography>
                </CardContent>
              </Card>
            </ListItemButton>
          </ListItem>
          ))
      ) : (
        <h1>No results found!</h1>
      )}
      </List>
    </Box>
  );
}