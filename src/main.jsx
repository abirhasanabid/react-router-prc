import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import Albums from './Components/Albums/Albums';
import UserDetails from './Components/UserDetails/UserDetails';
import Comments from './Components/Comments/Comments';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'footer',
        element: <Footer></Footer>
      },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },

      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/albums',
        loader: () => fetch('https://jsonplaceholder.typicode.com/albums'),
        element: <Albums></Albums>
      },
      {
        path: '/comments',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      }

    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
