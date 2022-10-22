import axios from "axios";
import { apiUrl } from "./ApiUrl";

export default class RentalService{
    add(values){
        return axios.post(apiUrl+"Rentals/add",values)
    }
    getAll(){
        return axios.get(apiUrl+"Rentals/getlAll")
    }
    getByUserId(id){
        return axios.get(apiUrl+"Rentals/getByUserId?userId="+id)
    }
}