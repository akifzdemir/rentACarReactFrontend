import { ErrorMessage, useFormik } from 'formik'
import React, { useState } from 'react'

import ColorService from '../services/ColorService'
import * as yup from 'yup'
import { toast } from 'react-toastify'
function AddColor() {

    const colorService = new ColorService()


    const schema = yup.object().shape({
       colorName:yup.string().required("Color Name is required")
    })
    

    const formik = useFormik({
        initialValues: {
            colorName: ""
        },
        onSubmit: async (values) => {
            await colorService.add(values)
            toast.success('Color Added!',{
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

export default AddColor