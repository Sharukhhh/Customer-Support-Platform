import React from 'react'
import { useSelector } from 'react-redux'
import {Outlet , Navigate} from 'react-router-dom'


const PrivateComponent = ({forUser}) => {

    const loggedUser = useSelector((state) => state.login.user);

    if(forUser) {

        if(loggedUser) {
            return <Outlet/>
        } else {
            <Navigate to={'/login'} replace/>
        }
    } 
}

export default PrivateComponent