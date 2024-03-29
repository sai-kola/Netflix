import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className=' absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='bgImg'/>
    </div>
    <form className=' absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Login":"Sign Up"}</h1>
       {!isSignInForm && <input type='text' placeholder='Enter Name...' className='p-2 my-4 w-full bg-gray-700'/>}
        <input type='email' placeholder='xyz@example.com' className='p-2 my-4 w-full bg-gray-700'/>
        <input type='text' placeholder='Enter Passs..' className='p-2 my-4 w-full bg-gray-700'/>
        <button className='p-3 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?"Login":"Sign Up"}</button>
        <p className='py-4 font-thin cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already User?.. Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login