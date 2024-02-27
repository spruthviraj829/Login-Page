import React from 'react'
import  {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {
    const [FormData , setFromData]= useState(
        {
           FirstName:"" , LastName:"",email:"" ,ConformPassword:"" ,password:""
        }
    )

const navigate = useNavigate();
const [AccountType , setAccountType] = useState("student")
const [ShowPass ,SetPass] = useState(false)
const [ShowConfPass ,SetConfPass] = useState(false)
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
           if(FormData.password != FormData.ConformPassword){
              alert("Password Does Not Match ")
              return 
           }
           setIsLoggedIn(true)
           navigate("/dashboard")

        const Finaldata ={
            ...FormData,
            AccountType
        }
           console.log(Finaldata)
     }

  return (
    <div onSubmit={submitHandler} className=''>

        <div className='flex bg-slate-400 max-w-max gap-3 justify-between rounded-full p-[6px] px-2 mt-2 mb-2 transition-all duration-200' >
            <button 
            className={ `${AccountType==="student"? "bg-slate-700  rounded-full p-[6px]" :"bg-transparent opacity-80"}`}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            className={ `${AccountType==="instructor"? "bg-slate-700  rounded-full p-[6px]" :"bg-transparent opacity-80"}`}
             onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form action="" >

           <div className='flex gap-6 justify-between w-full mb-2'>
                    <label className='w-full' >
                        <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
                        First Name <sup className='text-pink-300'>*</sup></p>
                        <input type="text"
                        required
                        name='FirstName'
                        onChange={changeHandler}
                        placeholder='Enter first Name'
                        className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
                        />
                    </label>
                    <label className='w-full' >
                        <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
                        Last Name <sup className='text-pink-300'>*</sup></p>
                        <input type="text"
                        required
                        name='LastName'
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
                        />
                    </label>
            </div> 

            <label className=''>
             <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
            Email Address <sub className='text-pink-300'>*</sub></p>

             <input type="email" name="email" 
              required 
            //   value={FormData.email}
              onChange={changeHandler}
              placeholder='Enter Email Address'
              className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
              />
          </label>
           

           <div className='flex gap-6 items-center mt-3'>
             <label className='relative w-full' >

             <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
            Create Password <sub className='text-pink-300'>*</sub></p>

             <input type= {ShowPass?("text") :("password")}
              name="password" 
              required 
              value={FormData.password}
              onChange={changeHandler}
              placeholder='Enter Password'
              className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
              />

             <span 
              className='absolute top-9 right-3 cursor-pointer'
             onClick={()=>{
                SetPass(!ShowPass) }}>
                { ShowPass ? (<AiOutlineEyeInvisible fontSize={24}/>):
                (<AiOutlineEye fontSize={24}/>) }
            </span>

             </label>


             <label  className='relative w-full'>

             <p className='text-[0.875rem] mb-1 opacity-70 leading-[1.375rem]'>
                Conform Password <sub className='text-pink-300'>*</sub></p>

             <input type= {ShowConfPass?("text") :("password")}
              name="ConformPassword" 
              required 
              value={FormData.ConformPassword}
              onChange={changeHandler}
              placeholder='Conform Password'
              className='bg-slate-700 rounded-[0.5rem] w-full shadow-sm shadow-white p-[10px] '
              />

             <span 
              className='absolute top-[37px] right-3 cursor-pointer'
             onClick={()=>{
                SetConfPass(!ShowConfPass) }}>
                { ShowConfPass ? (<AiOutlineEyeInvisible fontSize={24}/>):
                (<AiOutlineEye fontSize={24}/>) }
            </span>

             </label>
           </div>

           <button  className='bg-yellow-500 rounded-[9px] mt-8 py-[8px] px-[12px] w-full'>
            Create Account
           </button>

        </form>
      
    </div>
  )
}

export default SignupForm
