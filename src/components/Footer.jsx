import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-neutral-100 px-24 pt-20 pb-44 flex justify-between gap-20'>
        <div className='w-2/5'>
          <h1 className='text-4xl font-semibold '>Connect with us</h1>
          <input type="text" placeholder='Enter your email' className='border w-full mt-4 p-2 rounded-md bg-neutral-100 outline-none'/>
        </div>
        <div className='flex justify-around w-3/5'>
          <div>
            <h1 className='text-xl font-semibold text-blue-800'>Support</h1>
            <ul className='mt-4'>
              <li className='text-md my-2'>Customer Support</li>
              <li className='text-md my-2'>Frequently Asked</li>
              <li className='text-md my-2'>Order Issues</li>
              <li className='text-md my-2'>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-semibold text-blue-800'>About Us</h1>
            <ul className='mt-4'>
              <li className='text-md my-2'>Customer Support</li>
              <li className='text-md my-2'>Frequently Asked</li>
              <li className='text-md my-2'>Order Issues</li>
              <li className='text-md my-2'>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-semibold text-blue-800'>Links</h1>
            <ul className='mt-4'>
              <li className='text-md my-2'>Customer Support</li>
              <li className='text-md my-2'>Frequently Asked</li>
              <li className='text-md my-2'>Order Issues</li>
              <li className='text-md my-2'>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-semibold text-blue-800'>Privacy Policy</h1>
            <ul className='mt-4'>
              <li className='text-md my-2'>Customer Support</li>
              <li className='text-md my-2'>Frequently Asked</li>
              <li className='text-md my-2'>Order Issues</li>
              <li className='text-md my-2'>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-blue-800'>
        <div className='px-24 py-4'>
          <h1 className='text-white text-center text-sm font-light'>2023 Copyright Commerce</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer