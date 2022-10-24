import { useFormik } from 'formik'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import RentalService from '../services/RentalService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddRental({ carId, isRentable }) {

    const [open, setOpen] = React.useState(false);
    const { user, auth } = useContext(AuthContext);
    const rentalService = new RentalService()
    const navigate = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            userId: 0,
            carId: 0,
            returnDate: ""
        },
        onSubmit: async (values) => {
            values.carId = carId
            values.userId = user.userId
            const dateNow = dayjs().format('YYYY-MM-DD')
            const selectedDate = values.returnDate
            try {
                if (auth) {
                    if (selectedDate > dateNow) {
                        const result = await rentalService.add(values);
                        toast.success(result.data.message)
                        navigate("/myrentals")
                    } else {
                        toast.error("Please insert a valid date")
                    }
                } else {
                    toast.error("You need to login for this operation")
                }
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div>
            {
                isRentable ?
                    <Button variant="contained" color='primary' onClick={handleClickOpen}>
                        Rent
                    </Button>
                    :
                    <Button disabled>Not Rentable</Button>
            }
            <Dialog
                open={open}
                keepMounted
                fullWidth
                maxWidth={'xs'}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Choose return date"}</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            type={'date'}
                            value={formik.values.returnDate}
                            onChange={formik.handleChange}
                            name={'returnDate'}
                            required
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                            <Button type='submit' onClick={handleClose}>Pay</Button>
                        </DialogActions>
                    </form>
                </DialogContent>

            </Dialog>


        </div>
    )
}

export default AddRental