import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';
import Cagetorynews from '../pages/Cagetorynews';


const mainroute = createBrowserRouter([{
    path: "/",
    element: <Home/>,
    children:[
        {
            path:"",
            element:<Navigate to={'/catagory/01'}/>
        },
    {
        path:'/catagory/:id',
        element:<Cagetorynews/>,
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        
    }
]
}])

export default mainroute;