import React from 'react';
import item1 from '../assets/swimming.png'
import item2 from '../assets/class.png'
import item3 from '../assets/playground.png'
import advetige from '../assets/bg.png'
const QZone = () => {
    return (
        <div className='space-y-4'>
            <h1 className='font-bold mb-4'>Q-Zone</h1>
            <div>
                <img src={item1} alt="" />  
            </div>
            <div>
                <img src={item2} alt="" />

            </div>
            <div>
                <img src={item3} alt="" />

            </div>
            <div>
                <img src={advetige} alt="" />

            </div>
            
        </div>
    );
};

export default QZone;