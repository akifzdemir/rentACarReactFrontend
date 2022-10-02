import React, { useContext, useEffect } from 'react'
import BrandsContext from '../context/BrandsContex'
import BrandService from '../services/BrandService'
import { toast } from 'react-toastify'


function Brands() {

  const brandService = new BrandService();
  const {brands} = useContext(BrandsContext)

  const deleteBrand = async(brand)=>{
    try {
      await brandService.delete(brand)
      toast.success("Brand Deleted!",{
        position:'top-right'
      })
    } catch (error) {
      console.log(error)
    }
   
  }

 
  return (
    <div>
    
    </div>
   
  )
}

export default Brands