import React from 'react';
import Marquee from 'react-fast-marquee';

const Latestnews = () => {
    return (
        <div className='flex gap-2 items-center bg-gray-200 px-2 py-2'>
           <p className='bg-[#D72050] text-white font-bold px-2 py-1'>Latest</p>
           <Marquee pauseOnHover={true}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda maiores quaerat odit aliquam voluptates necessitatibus.
           </Marquee>
        </div>
    );
};

export default Latestnews;