import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/Home';

const mainroute = createBrowserRouter([{
    path: "/",
    element: <Home/>,
}])

export default mainroute;