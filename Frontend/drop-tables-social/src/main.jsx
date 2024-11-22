import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import ErrorPage from "./error-page";
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Feed from './pages/Feed.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/",
        element: <Home/>
      },
      {
        path: "profile/",
        element: <Profile/>
      },
      {
        path: "feed/",
        element: <Feed/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
