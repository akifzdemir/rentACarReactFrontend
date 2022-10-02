import axios from "axios";

export default class BrandService{

    getBrands(){
        return axios.get("https://localhost:7012/api/Brands/getall");
    }
    getBrandById(id){
        return axios.get("https://localhost:7012/api/Brands/getbyid?id="+id)
    }
    add(values){
        return axios.post("https://localhost:7012/api/Brands/add",values)
    }
    delete(values){
        return axios.post("https://localhost:7012/api/Brands/delete",values)
    }
    update(values){
        return axios.put("https://localhost:7012/api/Brands/update",values)
    }
}