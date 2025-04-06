
import axios from "axios";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: {
    'Authorization': "Bearer <TOKEN>",
    'Content-Type': 'application/json'
  },
});

api.interceptors.request.use(request =>{
  console.log("Starting Request ", request);
  return request;
},
(config) =>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},
(error) =>{
    console.error('Request Error ', error);
    return Promise.reject(error);
}
)


api.interceptors.response.use((response)=>{
    // success check, return data 
    return response;
},
(error)=>{
    if(error.response && error.response.status === 401){
        console.error('Unauthorized!')
    }
    if(error.response && error.response.status === 500){
        console.error('Server Eerror!')
    }
    return Promise.reject(error);
}
)
export default api;
