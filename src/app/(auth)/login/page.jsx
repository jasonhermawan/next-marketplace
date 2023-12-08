"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { message } from 'antd';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleLogin = async () => {
    try {
      const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/account/login`, {
        email,
        password
      })
      localStorage.setItem("token", result.data.result.token)
      setEmail("");
      setPassword("");
      router.push("/")
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'Wrong email / password',
        duration: 3,
      });
      setEmail("");
      setPassword("");
      console.log(error);
    }
  }

  return (
    <div className='w-2/6 bg-white shadow-md m-auto p-6 rounded-md'>
      {contextHolder}
      <h1 className='mb-8 text-center font-semibold text-3xl'>Welcome Back</h1>
      <div className='mb-4'>
        <h3 className='mb-1'>Email</h3>
        <input value={email} type="text" placeholder='you@mail.com' className='border py-2 px-4 w-full rounded-md outline-none' onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='mb-8'>
        <h3 className='mb-1'>Password</h3>
        <input value={password} type="password" placeholder='Password' className='border py-2 px-4 w-full rounded-md outline-none' onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button className='w-full bg-blue-800 text-white p-2 rounded-md mb-4' onClick={() => handleLogin()}>Login</button>
      <p className='text-sm'>Don't have an account? Register here</p>
    </div>
  )
}

export default Login