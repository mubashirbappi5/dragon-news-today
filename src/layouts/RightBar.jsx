import React from 'react';
import SocialLogin from '../components/SocialLogin';
import FindUs from '../components/FindUs';
import QZone from '../components/QZone';

const RightBar = () => {
    return (
        <div className='space-y-6'>
            <SocialLogin/>
            <FindUs/>
            <QZone/>
            
        </div>
    );
};

export default RightBar;