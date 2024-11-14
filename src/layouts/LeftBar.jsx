
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { to } from './../../node_modules/moment/src/lib/moment/to';

const LeftBar = () => {
    const [category,setcategory] = useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=> res.json())
        .then(data=>setcategory(data.data.news_category))
    },[])
    return (
        <div>
            <h1 className='font-semibold text-xl'>All Caterogy ({category.length})</h1>
          <div className='flex flex-col gap-2 mt-4'>
          {
            category.map(categoris =>
            <NavLink to={`/catagory/${categoris.category_id}`} className='btn' key={categoris.category_id}>{categoris.category_name}</NavLink>)
          }
          </div>

        </div>
    );
};

export default LeftBar;