import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const News = ({newscard}) => {
    return (
        <div>
             <div className=" p-4 border rounded-lg shadow-lg bg-white">
      {/* Author and Date */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <img src={newscard.author.img} alt="Author" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h2 className="text-sm font-bold">{newscard.author.name}</h2>
            <p className="text-xs text-gray-500">{new Date(newscard.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        {/* Bookmark and Share Icons */}
        <div className="flex space-x-2">
          <FaRegBookmark className="text-gray-500 cursor-pointer" />
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="my-2 text-lg font-bold text-gray-800">{newscard.title}</h3>

      {/* Thumbnail Image */}
      <div className="my-2">
        <img src={newscard.thumbnail_url} alt="Thumbnail" className="w-full h-64 object-cover rounded-md" />
      </div>

      {/* Details */}
      <p className="text-gray-600 text-sm my-2">{newscard.details.slice(0, 150)}... <span className="text-blue-500 cursor-pointer">Read More</span></p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="text-gray-800 font-semibold mr-2">{newscard.rating.number}</span>
          <span className="text-gray-500 text-sm">{newscard.rating.badge}</span>
        </div>
        <div className="flex items-center">
          <FaEye className="text-gray-500 mr-1" />
          <span className="text-gray-800 font-semibold">{newscard.total_view}</span>
        </div>
      
      </div> 
     </div>  
     </div>   
        
    );
};

export default News;