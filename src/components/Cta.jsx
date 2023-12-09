import React from 'react'
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Cta = () => {
  return (
    <div className='py-2 px-4 bg-white shadow-lg z-10 fixed bottom-10 right-10 rounded-xl flex items-center gap-2'>
      <i className='bx bxs-chat text-3xl text-blue-800' ></i>
      <h1 className='text-blue-800 font-semibold'>Customer Care</h1>
    </div>
  )
}

export default Cta