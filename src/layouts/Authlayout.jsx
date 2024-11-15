import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const Authlayout = () => {
    return (
        <div className='bg-[#E7E7E7]'>
            <div className='w-11/12 mx-auto font-myfont '>
           <header className='pt-6'>
           <Navber/>
           </header>
            <Outlet/>            
        </div>
        </div>
    );
};

export default Authlayout;