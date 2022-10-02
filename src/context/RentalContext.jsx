import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import RentalService from "../services/RentalService";

const RentalContext = createContext()

export const RentalProvider=({children})=>{

    const rentalService = new RentalService()
    const [rentals,setRentals] = useState([])

    const getData = async()=>{
        try {
            const result = await rentalService.getAll()
            setRentals(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addRental=async(rental)=>{
        try {
            const result = await rentalService.add(rental)
            toast.success(result.data.message)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        getData()
    },[])


    const values ={
        rentals,
        addRental
    }


    return <RentalContext.Provider value={values}>{children}</RentalContext.Provider>
}