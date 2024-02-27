import React, { useState } from 'react'
import  {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { fromJSON } from 'postcss'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedIn}) => {

// const setIsLoggedIn = props.setIsLoggedIn;
 const navigate = useNavigate()
    const [FormData , setFromData]= useState(
        {
           email:"" , password:""
        }
    )

    const [ShowPass ,SetPass] = useState(false)

    function changeHandler (event){
       const {name , value} = event.target
       setFromData((prevData)=>(
        {
            ...prevData ,
            [name]:value
        }))
  
    }

    function submitHandler(event){
      event.preventDefault();
    setIsLoggedIn(true)
    console.log(FormData)

    navigate("/dashboard")

    }
  
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 '  >
          <label className='w-full' >
             <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
                Email Address <sup className='text-pink-300'>*</sup>
            </p>

             <input type="email" name="email" 
              required 
            //   value={FormData.email}
              onChange={changeHandler}
              placeholder='Enter Email Address'
              className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
              />
          </label>

          <label className='w-full relative'>

             <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
                Password <sup className='text-pink-300'>*</sup></p>

             <input type= {ShowPass?("text") :("password")} name="password" 
              required 
              value={FormData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '/>

            <span
             className='absolute top-9 right-3 cursor-pointer'
            onClick={()=>{
                SetPass(!ShowPass)
            }}
           >
                { ShowPass ? (<AiOutlineEyeInvisible fontSize={24}/>):
                (<AiOutlineEye fontSize={24}/>) }
            </span>

            <Link to='#'> 
              <p className='text-lime-200 mt-1 text-xs absolute right-1 mb-20'>Forgot password?</p> 
            </Link>

          </label>

          <button className='bg-yellow-500 rounded-[9px] mt-8 py-[8px] px-[12px]' >
            Sign In
          </button>

    </form>
  )
}

export default LoginForm
