import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import user from '../assets/user.png'
import { to } from './../../node_modules/moment/src/lib/moment/to';
const Navber = () => {
    return (
        <div className='flex justify-between '>
           <div></div>
           <div className='nav space-x-4'>
          <NavLink to='/' className='btn btn-ghost'>Home</NavLink>
          <NavLink to='/about'  className='btn btn-ghost'>About</NavLink>
          <NavLink to='career'  className='btn btn-ghost'>Career</NavLink>

           </div>
           <div className='flex items-center gap-2'>
           <img src={user}alt="" />
           <Link to={'/auth/login'} className='px-6 py-1 bg-black text-white font-bold'>login</Link>
           
           </div>



            
        </div>
    );
};

export default Navber;