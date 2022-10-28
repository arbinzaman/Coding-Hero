import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to ="/signIN"
         state={{from: location}}
         replace></Navigate>
    }
    return children;
};

export default PrivateRoute;