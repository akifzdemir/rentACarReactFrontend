import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import BrandService from '../services/BrandService'
import CarService from '../services/CarService'


function AddBrand() {
    const brandService = new BrandService()
    const carService = new CarService()

    const schema = yup.object().shape({
        brandName:yup.string().required("Brand Name is required")
    })

    const formik = useFormik({
        initialValues:{
            brandName:""
        },
        onSubmit:async(values)=>{
            let result = await brandService.add(values)
            let cars = await carService.getCarsDetailsByBrandId(result.data.message)
            console.log(cars.data)
            toast.success("Brand Added!",{
                position:'top-right'
            })
        },
        validationSchema:schema

    })

  return (
         <div className='form-page'>
           
        </div>
  )
}

export default AddBrand