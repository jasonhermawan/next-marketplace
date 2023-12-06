"use client"
import { useFormik } from 'formik';
import * as yup from 'yup'
import React, { useState } from 'react'
import axios from 'axios';
import { Spin } from 'antd';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const registerAccount = async () => {
    try {
      setLoading(true)
      const result = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/account/register`, {
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
        confirmPassword: formik.values.confirmPassword,
      })
      router.push("/login")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: registerAccount,
    validationSchema: yup.object().shape({
      username: yup.string().required("Username is required").min(3).max(10),
      email: yup.string().required("Email is required").email(),
      password: yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Password must have uppercase, lowercase, number, and special character"
      ),
      confirmPassword: yup.string().required("Match with your password").oneOf([yup.ref("password")], "Password does not match"),
    })
  })

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value)
  }

  return (
    <div className='w-2/5 bg-white shadow-md m-auto p-6 rounded-md'>
      <h1 className='mb-8 text-center font-semibold text-3xl'>Create Account</h1>
      <div className='mb-4'>
        <h3 className='mb-1'>Username</h3>
        <input type="text" placeholder='Username' className='border py-2 px-4 w-full rounded-md outline-none' onChange={handleForm} name='username'/>
        <p className='text-xs text-red-700 pt-2'>{formik.errors.username}</p>
      </div>
      <div className='mb-4'>
        <h3 className='mb-1'>Email</h3>
        <input type="text" placeholder='you@mail.com' className='border py-2 px-4 w-full rounded-md outline-none' onChange={handleForm} name='email'/>
        <p className='text-xs text-red-700 pt-2'>{formik.errors.email}</p>
      </div>
      <div className='mb-4'>
        <h3 className='mb-1'>Password</h3>
        <input type="password" placeholder='Password' className='border py-2 px-4 w-full rounded-md outline-none' onChange={handleForm} name='password'/>
        <p className='text-xs text-red-700 pt-2'>{formik.errors.password}</p>
      </div>
      <div className='mb-8'>
        <h3 className='mb-1'>Confirm Password</h3>
        <input type="password" placeholder='Confirm password' className='border py-2 px-4 w-full rounded-md outline-none' onChange={handleForm} name='confirmPassword'/>
        <p className='text-xs text-red-700 pt-2'>{formik.errors.confirmPassword}</p>
      </div>
      <Spin spinning={loading}>
        <button className='w-full bg-blue-800 text-white p-2 rounded-md' type='submit' onClick={formik.handleSubmit}>Create Account</button>
      </Spin>
      <p className='text-sm mt-4'>Already have an account? Click here</p>
    </div>
  )
}

export default Register