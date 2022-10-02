import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CarService from '../services/CarService';


function Car() {

  const [car,setCar] = useState({})
  const { carId } = useParams()
  const carService = new CarService()

  const getCar=async(id)=>{
    try {
      let result = await carService.getCarDetailsById(id)
      setCar(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getCar(carId)
  },[carId])

  return (
   <>
   <Paper>
    <Box>
      
    </Box>
   </Paper>
   </>
  )
}

export default Car