import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loader}=use(AuthContext);
    if(loader){
        return <span className="loading loading-bars loading-xl"></span>
    }
    if (!user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoutes;