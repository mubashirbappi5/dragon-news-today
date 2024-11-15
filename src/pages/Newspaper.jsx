import React from 'react';
import Header from '../components/Header';
import RightBar from '../layouts/RightBar';
import { Link, useLoaderData } from 'react-router-dom';

const Newspaper = () => {
    const {data} = useLoaderData()
    
    const news = data[0]
  
    return (
        <div>
            <header>
                <Header/>
                <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
                <section className='col-span-9'>
                  <h1 className='font-bold text-2xl mb-6'>Dragon News</h1>
                <div className="card bg-base-100 border">
  <figure className="px-10 pt-10">
    <img
      src={news.image_url
      }
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-left">
    <h2 className="card-title">{news.title}</h2>
    <p>{news.details}</p>
    <div className="card-actions justify-start mt-6">
      <Link to={`/catagory/${news.category_id}`} className="btn btn-primary">All news in this category</Link>
    </div>
  </div>
</div>

                </section>
                <section className='col-span-3'>
                    <RightBar/>

                </section>



                </main>
            </header>
           
            
        </div>
    );
};

export default Newspaper;