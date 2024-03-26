import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Link , NavLink, useNavigate} from 'react-router-dom'
import { logoutUser } from '../../Redux/slices/authSlice';

const Navbar = ({isUser}) => {

    const [isOpen , setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    }

  return (
    <>
        <div>
            <nav className='border-gray-200 bg-cyan-400 ring-4'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <Link to={'/home'} className='flex items-center'>
                        <p className='self-center text-2xl lg:mb-1 lg:text-3xl font-extrabold lg:font-bold whitespace-nowrap dark:text-white'>{isUser ? 'Customer Care' : 'ADMIN'}</p>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
                        aria-controls="navbar-solid-bg"
                        aria-expanded={isOpen}
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    <div className={`w-full lg:block lg:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-solid-bg">
                        <ul className="flex flex-col mt-4 cursor-pointer rounded-lg text-lg font-semibold bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-transparent">
                            <li>
                                <NavLink to= '/ticket'>
                                    <p
                                        className="block py-2 pl-3 pr-4 lg:text-lg  bg rounded lg:bg-transparent lg:p-0 hover:scale-90"
                                        aria-current="page">
                                        Raise a Ticket
                                    </p>
                                </NavLink>
                            </li>
                            <li>
                            <NavLink to= '/history'>
                                    <p
                                        className="block py-2 pl-3 pr-4 lg:text-lg  rounded lg:bg-transparent lg:p-0 hover:scale-90"
                                        aria-current="page">
                                        Your History
                                    </p>
                            </NavLink>
                            </li>
                            <li>
                                <p
                                    className="block py-2 pl-3 pr-4 lg:text-lg text-gray-900 rounded lg:border-0  lg:p-0 hover:scale-90" 
                                    onClick={handleLogout}
                                    >
                                    Logout
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar