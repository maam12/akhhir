
import React from 'react'
import { Link } from 'react-router-dom'
import {  useUser} from '../../src/hook/useUser';

const Header = () => {

  const {user,logout} = useUser()

  console.log('header' , user)
  return (
 <header className='w-full bg-gray-700 p-4 text-white flex justify-between items-center'>
   <div>
    <h2>logo</h2>
    </div>
    <nav>

    
        <ul className='flex space-x-2'>

            {
        user ? <> 
        
        <Link to="" > <li>Home</li></Link> 
           <Link to="/dashpourd" ><li>Dashpourd</li></Link> 
           <span onClick={()=> logout()}>log out</span>
        
        </> : <>
        <Link to="/registar" > <li>Registar</li></Link> 
           <Link to="login" > <li>Login</li></Link> 
        
        </>
      }
      
        
        </ul>
    </nav>

 </header>
  )
}

export default Header