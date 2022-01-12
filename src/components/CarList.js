import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, InputLabel, List, ListItemButton, ListSubheader, OutlinedInput, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import Loading from './Loading';

const CarList = observer(({store}) => {
  const navigate = useNavigate();
  const [vin, setVin] = useState('');
  const [cars, setCars] = useState(store.assetList);
  const [foundCars, setFoundCars] = useState(cars);

  useEffect(() => {
    setCars(store.assetList);
  })

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = cars.filter((car) => {
        return car.vin.toLowerCase().startsWith(keyword);
      });
      setFoundCars(results);
    } else {
      setFoundCars(cars);
    }

    setVin(keyword);
  };

  return (
    cars.length === 0 ? <Loading/> :
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
          <ListItem button key={car.id} component="div">
            <ListItemButton component="button" onClick={(e) => navigate(`/asset/${car.id}`, {state: {car}})}>
              <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 5}}>
                <CardContent sx={{textAlign: 'center'}}>
                  <Typography gutterBottom variant="body1" component="div">
                    {car.vin}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.model}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.license_plate}
                  </Typography>
                </CardContent>
              </Card>
            </ListItemButton>
          </ListItem>
          ))
      ) : (
        cars.map((car) => (
          <ListItem button key={car.id} component="div">
            <ListItemButton component="button" onClick={(e) => navigate(`/asset/${car.id}`, {state: {car}})}>
              <Card sx={{ width: '100%', boxShadow: 3, borderRadius: 5}}>
                <CardContent sx={{textAlign: 'center'}}>
                  <Typography gutterBottom variant="body1" component="div">
                    {car.vin}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.model}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.license_plate}
                  </Typography>
                </CardContent>
              </Card>
            </ListItemButton>
          </ListItem>
          ))
      )}
      </List>
    </Box>
  );
})

export default CarList;