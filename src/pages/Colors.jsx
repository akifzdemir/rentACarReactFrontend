import React, { useContext } from 'react'

import ColorContex from '../context/ColorContex'
import ColorService from '../services/ColorService'
import {toast} from 'react-toastify'

function Colors() {
    const colorService = new ColorService()
    const {colors} = useContext(ColorContex)

    const deleteColor= async(color)=>{
      await colorService.delete(color)
      toast.success("Color Deleted!",{
        position:'top-right'
      })
    }

  return (
    <div>
   
    </div>
  
  )
}

export default Colors