import axios from 'axios';


export const axiosInstance = axios.create( {
    baseURL : 'http://localhost:4000/api/user',
});


export const adminAxiosInstance = axios.create ({
    baseURL : 'http://localhost:4000/api/admin'
})