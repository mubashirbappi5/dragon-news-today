import { list } from 'postcss';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../components/News';

const Cagetorynews = () => {
    const {data} = useLoaderData()
   
   
    return (
        <div>
            <h1 className='font-bold text-2xl mb-5'>Dragon News Home</h1>

            <div className='space-y-4 '>
                {
                    data.map(singledata => <News key={singledata._id} newscard={singledata}></News>)
                }
            </div>
            
        </div>
    );
};

export default Cagetorynews;