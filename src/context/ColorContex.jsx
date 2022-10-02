import { createContext, useEffect, useState } from "react";
import ColorService from "../services/ColorService";

const ColorContex = createContext()

export const ColorProvider=({children})=>{

    const [colors,setColors] = useState([])
    const colorService = new ColorService()
    
    const getColors = async()=>{
        try {
            let result = await colorService.getColors()
            setColors(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getColors()
    },[])

    const values ={
        colors,
        setColors
    }

    return <ColorContex.Provider value={values}>{children}</ColorContex.Provider>
}

export default ColorContex