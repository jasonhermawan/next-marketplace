import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='w-1/6 p-2'>
      <div className='border border-neutral-100 rounded-md'>
        <img src={props.image} className='w-full rounded-t-md' alt={props.name} />
        <div className='p-2'>
          <h3 className='text-md font-semibold text-red-500'>Rp {(props.price).toLocaleString("id")}</h3>
          <h1 className='text-md font-semibold mt-2 line-clamp-2'>{props.name}</h1>
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