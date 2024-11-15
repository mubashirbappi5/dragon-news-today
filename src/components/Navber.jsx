import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import user1 from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navber = () => {
    const {signoutuser,user} = useContext(AuthContext)
    const handlelogout=()=>{
        signoutuser()

    }
    return (
        <div className='flex justify-between '>
           <div> {
                 user && <p>{user.email}</p>
            } </div>
           <div className='nav space-x-4'>
          <NavLink to='/' className='btn btn-ghost'>Home</NavLink>
          <NavLink to='/about'  className='btn btn-ghost'>About</NavLink>
          <NavLink to='career'  className='btn btn-ghost'>Career</NavLink>

           </div>
           <div className='flex items-center gap-2'>
           <img src={user1}alt="" />
           {
            user? <button onClick={handlelogout} className='px-6 py-1 bg-black text-white font-bold'>logout</button>:<Link to={'/auth/login'} className='px-6 py-1 bg-black text-white font-bold'>login</Link>
           
           }
           </div>



            
        </div>
    );
};

export default Navber;