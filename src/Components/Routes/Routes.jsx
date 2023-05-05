import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import Blog from '../Pages/Blog/Blog';
import ChefRecipe from '../Pages/ChefRecipe/ChefRecipe';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';

    
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
            {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch(`https://chef-hunter-server-shahadatrafi.vercel.app/chefData`)
            },
            {
              path: '/blog',
              element: <Blog></Blog>
            },
            {
              path: '/chefData/:id',
              element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
              loader: ({params}) => fetch(`https://chef-hunter-server-shahadatrafi.vercel.app/chefData/${params.id}`)
            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            }
          ]
        },
      ]);

export default router;