import React, { useEffect, useState } from 'react'
import Navbar from '../Components/navbar/Navbar'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../axios/instance';

const UserHistory = () => {

    const loggedUser = useSelector((state) => state.login.user);
    const [histories , setHistories] = useState([]);

    const getData = async () => {
        try {
            const response = await axiosInstance.get(`/histories/${loggedUser?.email}`)
            if(response.data.message) {
                console.log(response)
                setHistories(response.data.histories);
            }
        } catch (error) {
            toast.error(error.response.data.error || error?.message);
        }
    }

    useEffect(() => {
        getData();
    }, []);
  return (
    <>
        <Navbar isUser={true}/>

        <div className='mt-4 overflow-x-auto'>
            <div className='table-auto w-full border-collapse border border-gray-300'>
                <thead>
                    <tr className='bg-gray-100'>
                        <th className='border border-gray-300 px-4 py-2'>Date</th>
                        <th className='border border-gray-300 px-4 py-2'>Title</th>
                        <th className='border border-gray-300 px-4 py-2'>Description</th>
                        <th className='border border-gray-300 px-4 py-2'>Category</th>
                        <th className='border border-gray-300 px-4 py-2'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-300 px-4 py-2'></td>
                        <td className='border border-gray-300 px-4 py-2'></td>
                        <td className='border border-gray-300 px-4 py-2'></td>
                        <td className='border border-gray-300 px-4 py-2'></td>
                        <td className='border border-gray-300 px-4 py-2'></td>
                    </tr>
                </tbody>
            </div>
        </div>
    </>
  )
}

export default UserHistory