import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center mt-16 bg-accent">
                <Outlet />
            </div>
            <div class="drawer-side mt-16">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <NavLink to='/dashboard'>Add Admin</NavLink>
                    <NavLink to='/dashboard/add-service'>Add Service</NavLink>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;