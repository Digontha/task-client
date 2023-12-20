import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='bg-[#DDD8DE] min-h-screen'>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;