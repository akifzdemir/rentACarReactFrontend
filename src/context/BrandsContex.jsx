import { createContext, useContext, useEffect, useState } from "react";
import BrandService from "../services/BrandService";

const BrandsContext = createContext()

export const BrandsProvider = ({ children }) => {

    const brandService = new BrandService();
    const [brands, setBrands] = useState([])

    const getBrands = async () => {
        try {
            let result = await brandService.getBrands()
            setBrands(result.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBrands()
    }, [])

    const values = {
        brands,
        setBrands
    }


    return <BrandsContext.Provider value={values}>{children}</BrandsContext.Provider>
}

export default BrandsContext