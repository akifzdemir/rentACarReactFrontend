import React, { useContext, useEffect } from 'react'
import CarContext from '../context/CarContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';
import CarService from '../services/CarService';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';
import { useState } from 'react';

function CarList() {
  
  const {user} = useContext(AuthContext)
  const carService = new CarService();
  const [cars,setCars] = useState([]);

  const getData=async()=>{
    try {
      const result = await carService.getCarsDetailsByUserId(user.userId)
      setCars(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete=async(car)=>{
    try {
      const result = await carService.detete(car)
      getData()
      toast.success("Car Deleted !",{
        position:'bottom-right'
      })
    } catch (error) {
      console.log(error)
      toast.error("Error",{
        position:'bottom-right'
      })
    }
  }

  useEffect(()=>{
    getData()
  },[user])
  return (
    <>
      <TableContainer sx={{mt:3}} component={Paper}>
      <Table sx={{textAlign:'center'}} aria-label="simple table">
        <TableHead sx={{backgroundColor:'black'}}>
          <TableRow>
            <TableCell sx={{color:'white'}}>Brand</TableCell>
            <TableCell sx={{color:'white'}} >Color</TableCell>
            <TableCell sx={{color:'white'}}>Details</TableCell>
            <TableCell sx={{color:'white'}}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cars.map((car) => (
            <TableRow
              key={car.carId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{car.brandName}</TableCell>
              <TableCell>{car.colorName}</TableCell>
              <TableCell><Button variant='contained' fullWidth>Details</Button></TableCell>
              <TableCell><Button variant='contained' fullWidth color='error' onClick={()=>{handleDelete(car)}}>Delete</Button></TableCell>     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
   
  )
}

export default CarList