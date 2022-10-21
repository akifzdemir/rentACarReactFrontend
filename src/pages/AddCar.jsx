import { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import BrandsContext from '../context/BrandsContex';
import ColorContex from '../context/ColorContex';
import CarService from '../services/CarService';
import { useFormik } from 'formik';
import { FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import CarImageService from '../services/CarImageService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';

function AddCar() {

  const { brands } = useContext(BrandsContext)
  const { colors } = useContext(ColorContex)
  const [file, setFile] = useState()
  const carService = new CarService()
  const carImageService = new CarImageService()
  const navigate = useNavigate()
  const user = useContext(AuthContext);

  const handleImageChance = (e) => {
    setFile(e.target.files[0])
  }

  const formik = useFormik({
    initialValues: {
      colorId: 0,
      brandId: 0,
      modelYear: 0,
      dailyPrice: 0,
      ownerId:0,
      description: ""
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      try {
        const result = await carService.add(values)
        const carId = result.data.message
        formData.append("carId", carId)
        formData.append("file", file)
        const image = await carImageService.add(formData)
        toast.success("Car Posted Successfully ! ",{
          position:'bottom-right'
        })
        navigate("/")
      } catch (error) {
        console.log(error.message)
      }
    }
  })

  return (
    <div>
      <Container component={Paper} maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 56, height: 56 }}>
            <DirectionsCarIcon sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Post Car
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  name='brandId'
                  label="Brand"
                  value={formik.values.brandId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                 <MenuItem value={0}></MenuItem>
                  {
                    brands.map((brand) => (
                      <MenuItem key={brand.brandId} value={brand.brandId}>{brand.brandName}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  name='colorId'
                  label="Color"
                  value={formik.values.colorId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}  

                >
                  <MenuItem value={0}></MenuItem>
                  {
                    colors.map((color) => (
                      <MenuItem key={color.colorId} value={color.colorId}>{color.colorName}</MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type={'number'}
                  label="Daily Price"
                  name="dailyPrice"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dailyPrice}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  type={'number'}
                  label="Model Year"
                  name="modelYear"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.modelYear}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiline
                  value={formik.values.description}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">  
                  {file ? file.name : " Upload Image"}             
                  <input hidden accept="image/*" onChange={handleImageChance} multiple type="file" /> 
                </Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AddCar