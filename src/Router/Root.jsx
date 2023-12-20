import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Root = () => {
    return (
        <div className='bg-[#DDD8DE] min-h-screen'>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;