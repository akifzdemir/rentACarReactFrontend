import { useFormik } from 'formik'
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

function AddRental() {

    const [open, setOpen] = React.useState(false);

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
            rentDate: ""
        },
        onSubmit: (values) => {
            console.log(values)
        }

    })

    return (
        <div>
            <Button variant="contained" color='primary' onClick={handleClickOpen}>
            Rent
            </Button>
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
                        <input type="date" onChange={formik.handleChange} name="rentDate" value={formik.values.rentDate} onBlur={formik.handleBlur} />
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