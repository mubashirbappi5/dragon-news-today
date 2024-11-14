import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png'
const Navber = () => {
    return (
        <div className='flex justify-between '>
           <div></div>
           <div className='nav space-x-4'>
          <NavLink className='btn btn-ghost'>Home</NavLink>
          <NavLink  className='btn btn-ghost'>About</NavLink>
          <NavLink  className='btn btn-ghost'>Career</NavLink>

           </div>
           <div className='flex items-center gap-2'>
           <img src={user}alt="" />
           <button className='px-6 py-1 bg-black text-white font-bold'>login</button>
           
           </div>



            
        </div>
    );
};

export default Navber;