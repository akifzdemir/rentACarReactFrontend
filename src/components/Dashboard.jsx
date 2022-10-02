import React from 'react'
import Navi from './Navi'
import { Route, Routes } from 'react-router-dom'
import Car from '../pages/Car'
import AddColor from '../pages/AddColor'
import { ToastContainer } from 'react-toastify'
import BrandsCategory from './BrandsCategory'
import ColorsCategory from './ColorsCategory'
import Colors from '../pages/Colors'
import Brands from '../pages/Brands'
import AddBrand from '../pages/AddBrand'
import UpdateBrand from '../pages/UpdateBrand'
import UpdateColor from '../pages/UpdateColor'
import CarList from '../pages/CarList'
import Main from '../pages/Main'
import { Container } from '@mui/material'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddCar from '../pages/AddCar'


function Dashboard() {
    return (
        <>
        <ToastContainer position='bottom-right'/>
            <Navi />
            <br />
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/brand/:brandId' element={<Main />} />
                    <Route path='/color/:colorId' element={<Main/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/postcar' element={<AddCar/>}/>
                    <Route path='/carlist' element={<CarList/>}/>
                </Routes>
            </Container>
            <br />
        </>

    )
}

export default Dashboard