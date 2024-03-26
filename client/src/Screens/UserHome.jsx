import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Components/navbar/Navbar'
import {useSelector} from 'react-redux';
import { IoTicketSharp } from "react-icons/io5";


    const ParagraphItem = ({ text }) => {
        return (
        <div className='w-full flex justify-center'>
            <p className='text-gray-700 font-mono text-lg'>{text}</p>
        </div>
        );
    };

const UserHome = () => {

    const loggedUser = useSelector((state) => state.login.user);

  return (
    <>
        <Navbar isUser={true}/>

        <div className='py-32'>
            <div className='max-w-5xl mx-auto'>
                <div className='bg-gray-200 shadow-md shadow-black rounded-lg p-8 mx-4 sm:mx-auto'>
                    <h2 className='text-3xl font-bold text-center mb-4'>Hello, {loggedUser?.username}!</h2>

                    <div className='text-center mb-6'>
                        <ParagraphItem text={'Welcome to our customer care platform.'}/>
                        <ParagraphItem text={'Here, you can raise a ticket to report any issues, complaints, or problems you encounter.'}/>
                        <ParagraphItem text={'Our team of administrators will promptly review your ticket and provide updates on its status.'}/>
                        <ParagraphItem text={'We are dedicated to ensuring your concerns are addressed efficiently and effectively.'}/>
                    </div>

                    <div className='text-center'>
                        <Link to={'/ticket'} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
                            Raise a Ticket <IoTicketSharp className='ml-2'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserHome