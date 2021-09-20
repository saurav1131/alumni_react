import axios from "axios";


const api_url ="http://10.244.0.43:8080/api/v1/employees";
class Service {

getpeople(){
    return axios.get(api_url);
}
}
 export default Service;