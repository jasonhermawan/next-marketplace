import Link from 'next/link'
import React from 'react'
import { Dropdown } from 'antd';

const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <div className='w-32 py-1 px-2'>
          <Link href="/">
            <h3>Login</h3>
          </Link>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='w-32 py-1 px-2'>
          <Link href="/">
            <h3>Register</h3>
          </Link>
        </div>
      ),
    }
  ]
  return (
    <div className='fixed z-40 '>
      <div className='py-2 px-24 bg-blue-800 text-white flex justify-between items-center'>
        <p className='text-sm font-light'><i class='bx bxs-phone' ></i> Hotline 0812 3456 7890</p>
        <div>
          <ul className='flex gap-5 text-sm font-light'>
            <li>About Us</li>
            <li>Location</li>
            <li>Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="w-screen bg-white py-4 px-24 flex justify-between items-center">
        <div className='flex items-center gap-4 w-3/4'>
          <h1 className='font-semibold text-3xl'>Commerce</h1>
          <input type="text" placeholder='Search Product' className='border w-3/4 py-2 px-4 rounded-md outline-none'/>
        </div>
        <div className='flex gap-8 w-1/4 justify-end'>
          <div className='flex flex-col text-center'>
              <i className='bx bx-heart text-2xl cursor-pointer' />
              <h3 className='text-sm cursor-pointer'>Wishlist</h3>
          </div>
          <div className='flex flex-col text-center'>
              <i className='bx bx-cart text-2xl cursor-pointer' />
              <h3 className='text-sm cursor-pointer'>Cart</h3>
          </div>
          <Dropdown
            menu={{items,}}
            placement='bottomRight'
            arrow
          >
            <div className='flex flex-col text-center'>
              <i className='bx bx-user text-2xl cursor-pointer' />
              <h3 className='text-sm cursor-pointer'>Account</h3>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="w-screen bg-neutral-100 py-1 px-24 flex justify-between items-center">
        <ul className='flex gap-5 text-sm'>
          <li>Home</li>
          <li>Promotion</li>
          <li>Featured Products</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar