import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AuthContext from '../context/AuthContext'
import RentalContext from '../context/RentalContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RentalService from '../services/RentalService'
import { Button, CardContent } from '@mui/material';
import CarService from '../services/CarService';
import { toast } from 'react-toastify'

function UserRentals() {

    const rentalService = new RentalService()
    const carService = new CarService()
    const [rentals,setRentals] = useState([])
    const {user} = useContext(AuthContext)


    const getData=async()=>{
        try {
            const result = await rentalService.getByUserId(user.userId)
            setRentals(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleReturn=async(carId)=>{
        try {
            await carService.updateIsRentable(carId,true)
            getData()
            toast.success("Car Returned !")
        } catch (error) {
            console.log(error)
            toast.error("Error")
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
            <TableCell sx={{color:'white'}}>Rent Date</TableCell>
            <TableCell sx={{color:'white'}} >Return Date</TableCell>
            <TableCell sx={{color:'white'}}>Return the Car</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rentals.map((rental) => (
            <TableRow
              key={rental.rentalId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{rental.brandName}</TableCell>
              <TableCell>{rental.rentDate}</TableCell>
              <TableCell>{rental.returnDate}</TableCell>  
              <Table>{rental.isRentable ?  <Button disabled>Returned</Button> : <Button onClick={()=>{handleReturn(rental.carId)}}>Return</Button>}</Table>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default UserRentals