import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ColorService from '../services/ColorService'
import {toast} from 'react-toastify'
import {useFormik} from 'formik'


function UpdateColor() {

    const [color,setColor]=useState({})
    const {colorId} = useParams()
    const colorService = new ColorService()

    const getColor =async(id)=>{
        try {
            let result =await colorService.getColorsById(id)
            setColor(result)
        } catch (error) {
            console.log(error)
        }
    }
    const updateColor=async(color)=>{
        try {
            let result = await colorService.update(color)
            toast.success("Color Updated!",{
                position:'top-right'
            })

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getColor(colorId)
    },[colorId])


    const formik = useFormik({
        initialValues:{
            colorName:"",
            colorId:colorId
        },
        onSubmit:(value)=>{
            updateColor(value)
            setColor(value)
        }
    })

    
    return (
        <div className='form-page'>
       
        </div>
    )
}

export default UpdateColor