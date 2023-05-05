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

    
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
              path: '/',
              element: <Home></Home>,
              loader: () => fetch(`http://localhost:5000/chefData`)
            },
            {
              path: '/blog',
              element: <Blog></Blog>
            },
            {
              path: '/chef-recipe',
              element: <ChefRecipe></ChefRecipe>
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