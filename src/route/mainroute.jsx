import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../layouts/Home';
import Cagetorynews from '../pages/Cagetorynews';
import Authlayout from '../layouts/Authlayout';
import Login from '../pages/Login';
import Register from '../pages/Register';


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
},
{
    path:'/auth',
    element:<Authlayout/>,
    children:[{
        path:'/auth/login',
        element:<Login/>
    },
{
    path:'/auth/register',
    element:<Register/>
}]
}

])

export default mainroute;