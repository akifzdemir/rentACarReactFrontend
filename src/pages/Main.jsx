import { Link, useParams } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react'
import CarService from '../services/CarService';
import CarContext from '../context/CarContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button, ButtonGroup, Divider, Grid, Stack } from '@mui/material';
import BrandsCategory from '../components/BrandsCategory';
import ColorsCategory from '../components/ColorsCategory';
import AddRental from '../components/AddRental';

function Main() {

  const { brandId, colorId } = useParams();
  const carService = new CarService();
  const { cars, setCars, getAllCars } = useContext(CarContext)
  const imageUrl = "https://localhost:7012/images/"


  const getCars = async () => {
    try {
      if (brandId) {
        let result = await carService.getCarsDetailsByBrandId(brandId)
        setCars(result.data.data)
      } else if (colorId) {
        let result = await carService.getCarsDetailsByColorId(colorId)
        setCars(result.data.data)
      } else {
        getAllCars()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCars()
  }, [brandId, colorId])

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4,md:16}}>
        <Grid xs={4} item>
        <BrandsCategory/>
        <br />
        <ColorsCategory/>
        </Grid>
      <Grid xs={12} item>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6,lg:9}}>
        {
          cars.map((car) => (
            <Grid key={car.carId} xs={3} item textAlign={'center'}>
              <Card sx={{ maxWidth: 345}}>
                <CardMedia
                  component="img"
                  height="194"
                  image={imageUrl+car.imagePath}
                />
                <CardContent>
                <Typography variant="h5">
                   {car.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {car.brandName}
                  </Typography>
                  <Typography variant="body1">
                    Daily Price: {car.dailyPrice}$
                  </Typography>
                </CardContent>
              <Divider/>
                <CardActions sx={{display:'flex',justifyContent:'space-around'}}>   
                  <IconButton color={'error'} aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <Stack direction={'row'} spacing={2}>
                  <Button variant='text' color='inherit' startIcon={<MoreHorizOutlinedIcon/>}>Details</Button> 
                  <AddRental carId={car.carId}/>
                  </Stack>  
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      </Grid>
      </Grid>
      
    </div>

  )
}

export default Main