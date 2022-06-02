import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardContent = ({ children }) => {
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center mt-16 bg-accent">
                {children}
            </div>
            <div class='drawer-side  mt-16 '>
                <label for='my-drawer-2' class='drawer-overlay'></label>
                <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
                    <li>
                        <NavLink to='/dashboard/add-service'>Add Service</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/add-admin'>Add Admin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardContent;