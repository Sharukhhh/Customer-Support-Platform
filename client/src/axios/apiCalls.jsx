import { toast } from "react-hot-toast";
import { axiosInstance } from "./instance"


export const  register = async (data) => {

    try {
        const response = await axiosInstance.post('/register', data);

        if(response.data.message) {
            return response;
        }

        console.log(response)

    } catch (error) {
        toast.error(error.response.data.error || error.message );
    }

}


export const  login = async (data) => {

    try {
        const response = await axiosInstance.post('/login', data);


        if(response.data.message) {
            return response;
        }

    } catch (error) {
        toast.error(error.response.data.error || error.message );
    }

}

export const complaintFormSubmit = async (data) => {

    try {
        const response = await axiosInstance.post('/ticket_raise', data);

        if(response.data.message) {
            return response;
        }

    } catch (error) {
        toast.error(error.response.data.error || error.message );
    }

}

