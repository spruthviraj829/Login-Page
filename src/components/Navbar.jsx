import React from 'react'
import logo from "../assets/Logo.svg"
import { Link ,NavLink } from 'react-router-dom'
import { useState } from 'react'
const Navbar = (props) => {

    let IsLoggedIn=props.IsLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    
  return (
    <div className='flex   mt-3 justify-between items-center   w-11/12  max-w-[1100px] mx-auto '>

      <Link to='/'>
        <img src={logo} alt="" width={160} height={32} loading='lazy' />
      </Link>

      <nav >
         <ul className='flex gap-x-10 items-center'>
             <li>
                <Link to='/'>Home</Link>
             </li>
             <li>
                <Link to='/'>About</Link>
             </li>
             <li>
                <Link to='/'>Contact</Link>
             </li>
         </ul>
      </nav>

      {/* login - singup -logout - dashboard */}


       <div className='flex gap-6 items-center'>  
            
             {  !IsLoggedIn &&
                 <Link to='/login'>
                 <button className='border border-white p-2 rounded py-1 shadow-sm shadow-white hover:opacity-50'>Login </button>
              </Link>
             }
            
            {  !IsLoggedIn &&
                 <Link to='/signup'>
                 <button className='border border-white p-2 rounded py-1 shadow-sm shadow-white hover:opacity-50'>Sign Up</button>
             </Link>
            }

           {  IsLoggedIn&&
             <Link to='/'>
             <button onClick={()=>{
                setIsLoggedIn(false)
             }}
             className='border border-white p-2 rounded py-1 shadow-sm shadow-white hover:opacity-50'>
                Log Out </button>
          </Link>
           }

           {IsLoggedIn&&
             <Link to='/dashboard'>
             <button className='border border-white p-2 rounded py-1 shadow-sm shadow-white hover:opacity-50'>Dashboard </button>
          </Link>
           }
            
       </div>

    </div>
  )
}

export default Navbar
