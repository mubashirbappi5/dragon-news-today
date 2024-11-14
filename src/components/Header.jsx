import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className=' text-center p-4 space-y-4'>
            <div className="logo flex justify-center">
                <img src={logo} alt="" />
            </div>
            <h1 className='text-gray-400'>Journalism Without Fear or Favour</h1>
            <h5 className='text-gray-400'>{moment().format("dddd, MMMM Do YYYY")}</h5>
        </div>
    );
};

export default Header;