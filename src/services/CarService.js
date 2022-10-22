import axios from "axios";
import { apiUrl } from "./ApiUrl";


export default class CarService{

    getCars(){
        return axios.get("https://localhost:7012/api/Cars/getAll")
    }
    getCarDetails(){
        return axios.get("https://localhost:7012/api/Cars/getCarDetails")
    }
   
    getCarDetailsById(id){
        return axios.get("https://localhost:7012/api/Cars/getcardetailbyid?id="+id)
    }
    getCarsDetailsByBrandId(brandId){
        return axios.get("https://localhost:7012/api/Cars/getcardetailsbybrand?brandId="+brandId)
    }
    getCarsDetailsByColorId(colorId){
        return axios.get("https://localhost:7012/api/Cars/getcardetailsbycolor?colorId="+colorId)
    }
    add(values){
        return axios.post("https://localhost:7012/api/Cars/add",values)
    }
    detete(values){
        return axios.post("https://localhost:7012/api/Cars/delete",values)
    }
    updateIsRentable(carId,isRentable){
        return axios.put(apiUrl+`Cars/updateIsRentable?carId=${carId}&isRentable=${isRentable}`)
    }
    
}