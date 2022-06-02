import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const user = false;
    const location = useLocation()
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return <Outlet />
};

export default PrivateRoute;