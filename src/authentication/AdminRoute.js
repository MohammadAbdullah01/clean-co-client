import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import Dashboard from '../pages/Dashboard/Dashboard';

const AdminRoute = () => {
    const [admin] = useAdmin()
    const location = useLocation()
    if (!admin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return <Outlet />
};

export default AdminRoute;