"use client"
import React from 'react'

const Login = () => {
  return (
    <div className='w-2/6 bg-white shadow-md m-auto p-6 rounded-md'>
      <h1 className='mb-8 text-center font-semibold text-3xl'>Welcome Back</h1>
      <div className='mb-4'>
        <h3 className='mb-1'>Email</h3>
        <input type="text" placeholder='you@mail.com' className='border py-2 px-4 w-full rounded-md outline-none'/>
      </div>
      <div className='mb-8'>
        <h3 className='mb-1'>Password</h3>
        <input type="password" placeholder='Password' className='border py-2 px-4 w-full rounded-md outline-none'/>
      </div>
      <button className='w-full bg-blue-800 text-white p-2 rounded-md mb-4'>Login</button>
      <p className='text-sm'>Don't have an account? Register here</p>
    </div>
  )
}

export default Login