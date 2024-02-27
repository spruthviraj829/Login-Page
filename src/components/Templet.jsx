import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from  'react-icons/fc'

const Templet = ({title ,desc1 ,desc2, image , formType ,setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 mx-auto max-w-[1100px] justify-between mt-4 py-12  gap-x-12 h-max'>
    
     <div className='w-11/12 max-w-[450px]' >

        <h1 className='font-bold text-[1.875rem] leading-[2.73rem]'>{title}</h1>

        <div>
            <span className='opacity-50'>{desc1}</span>
            <br />
            <span className='text-cyan-600'>{desc2}</span>
        </div>
         
      <div>
         {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>): 
          (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
       </div>

       <div className='flex w-full items-center gap-x-2 my-4'>
         <div className='h-[1px] bg-slate-200 w-full'></div>
         <p className='font-medium '>OR</p>
         <div className='h-[1px] bg-slate-200 w-full'></div>
       </div>

       <button className='w-full flex items-center justify-center rounded-[10px] font-medium text-slate-100
          border border-slate-100 px-3 py-2 gap-x-2 mt-6 shadow-sm shadow-white'>
        <FcGoogle/>
        <p>Sign Up with google</p>
       </button>

    </div>

      <div className='relative w-11/12  max-w-[450px] '>
        <img src={frameImage}
          width={558}
          height={504}
          loading='lazy'/>

        <img src={image}
         width={558}
         height={504}
         loading='lazy'
         className='absolute -top-4 right-4' />
      </div>

    </div>
  )
}

export default Templet
