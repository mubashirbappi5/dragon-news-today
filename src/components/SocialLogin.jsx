import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-2'>Login With</h1>
            <div className='space-y-4'>
            <button className='btn btn-outline'> <FaGoogle />Login With Google</button>
            <button className='btn btn-outline'> <FaGithub />Login With Github</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;