"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductCard = (props) => {
  const router = useRouter();
  return (
    <div className='w-1/6 pr-4'>
      <div className='border border-neutral-100 rounded-md cursor-pointer' onClick={() => router.push(`/product/${props.id}`)}>
        <img src={props.image} className='w-full rounded-t-md' alt={props.name} />
        <div className='p-2 mt-2'>
          <div className='h-8 flex flex-col justify-center'>
            <p className='text-sm line-through'>{props.discount ? `Rp ${(props.price).toLocaleString("id")}` : null}</p>
            <h3 className='text-md font-semibold text-red-500'>Rp {(props.discount ? props.discount : props.price).toLocaleString("id")}</h3>
          </div>
          <h1 className='text-md font-semibold mt-2 line-clamp-2 h-12'>{props.name}</h1>
        </div>
        <div className='p-2 flex items-center justify-between'>
          <div className='flex gap-0.5'>
            <i className='bx bxs-star text-md text-blue-800' ></i>
            <i className='bx bxs-star text-md text-blue-800' ></i>
            <i className='bx bxs-star text-md text-blue-800' ></i>
            <i className='bx bxs-star text-md text-blue-800' ></i>
            <i className='bx bxs-star text-md text-blue-800' ></i>
          </div>
          <i className='bx bx-heart text-xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default ProductCard