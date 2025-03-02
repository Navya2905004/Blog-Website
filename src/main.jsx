import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home.jsx'

let router =createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/Login",
      element:<Login/>
    },
    {
      path:"/Signup",
      element:<Signup/>
    },
    {
      path:"/Home",
      element:<Home/>
    },
    {
      path:"/UserNotFound",
      element:<h1>UserNotFound</h1>
    },
    {
      path:"*",
      element:<h1>Page Not Found</h1>,
    }
  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
