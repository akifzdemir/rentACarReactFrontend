import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import { useParams } from 'react-router-dom'
import BrandService from '../services/BrandService'
import {toast} from 'react-toastify'

function UpdateBrand() {

    const [brand,setBrand] = useState({})
    const {brandId} = useParams()
    const brandService = new BrandService()
    const getBrand =async(id)=>{
        try {
            let result =await brandService.getBrandById(id)
            setBrand(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const updateBrand=async(brand)=>{
        try {
            let result = await brandService.update(brand)
            toast.success("Brand Updated!",{
                position:'top-right'
            })
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        getBrand(brandId)
    },[brandId])

    const formik = useFormik({
        initialValues:{
            brandName:"",
            brandId:brandId
        },
        onSubmit: (value)=>{
            updateBrand(value)
            setBrand(value)
        }
    })

  return (
    <div className='form-page'>
   
</div>
  )
}

export default UpdateBrand