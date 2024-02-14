import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Registarpage from './pages/Registarpage.jsx'
import Dashpourdpage from './pages/Dashpourdpage.jsx'
import toast, { Toaster } from 'react-hot-toast';
import Loginpage from './pages/Loginpage.jsx'
import { UserProvider } from './hook/useUser.jsx'




const router = createBrowserRouter([
{
  path: "/",
  element : <App/>,
  children : [
    {
      path: "/registar",
      element: <Registarpage/>

    },
    {
      path: "/dashpourd",
      element: <Dashpourdpage/>

    },
    {
      path: "/login",
      element: <Loginpage/>

    }

  ]


}
])



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

   <UserProvider>
    <Toaster/>
   <RouterProvider router={router}/>
   </UserProvider>
  </React.StrictMode>

)
