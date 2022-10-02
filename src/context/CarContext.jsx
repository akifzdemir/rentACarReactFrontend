import { createContext, useEffect,useState } from "react";
import CarService from "../services/CarService";

const CarContext = createContext()


export const CarProvider=({children})=>{

    const [cars,setCars] = useState([]);
    const carService = new CarService()

    const getAllCars=async()=>{
        try {
            let result = await carService.getCarDetails();
            setCars(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }   

    useEffect(()=>{
        getAllCars();
    },[])

    const values ={
        setCars,
        cars,
        getAllCars
    }

    return <CarContext.Provider value={values}>{children}</CarContext.Provider>
}

export default CarContext