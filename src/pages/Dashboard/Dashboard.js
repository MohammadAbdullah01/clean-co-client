import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
    return (
        <DashboardContent>
            <Outlet />
        </DashboardContent>
    );
};

export default Dashboard;