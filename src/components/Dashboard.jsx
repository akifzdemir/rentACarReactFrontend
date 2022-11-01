import React from 'react'
import Navi from './Navi'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CarList from '../pages/CarList'
import Main from '../pages/Main'
import { Container } from '@mui/material'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddCar from '../pages/AddCar'
import UserRentals from '../pages/UserRentals'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


function Dashboard() {

    const {auth} = useContext(AuthContext)

    return (
        <>
        <ToastContainer position='bottom-center'/>
            <Navi />
            <br />
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/brand/:brandId' element={<Main />} />
                    <Route path='/color/:colorId' element={<Main/>} />
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/postcar' element={auth ? <AddCar/> : <Login/>}/>
                    <Route path='/mycars' element={auth ? <CarList/> : <Login/>}/>
                    <Route path='/myrentals' element={auth ? <UserRentals/> : <Login/>}/>
                </Routes>
            </Container>
            <br />
        </>

    )
}

export default Dashboard