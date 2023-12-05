import React from 'react'

const ProductCard = () => {
  return (
    <div className='w-1/6 p-2'>
      <div className='border border-neutral-100 rounded-md'>
        <img className='w-full rounded-t-md' src="https://thumbor.sirclocdn.com/unsafe/186x186/filters:format(webp):quality(70)/web.mitra10.com/media/catalog/product/1/1/1100007443_website_2.jpg" alt="" />
        <div className='p-2'>
          <h3 className='text-md font-semibold text-red-500'>IDR 2,410,073</h3>
          <h1 className='text-md font-semibold mt-2 line-clamp-2'>Sharp Led TV 2T-C32Df1I 32 Inch Hitam</h1>
        </div>
        <div className='p-2 flex items-center justify-between'>
          <div className='flex gap-0.5'>
            <i class='bx bxs-star text-md text-blue-800' ></i>
            <i class='bx bxs-star text-md text-blue-800' ></i>
            <i class='bx bxs-star text-md text-blue-800' ></i>
            <i class='bx bxs-star text-md text-blue-800' ></i>
            <i class='bx bxs-star text-md text-blue-800' ></i>
          </div>
          <i className='bx bx-heart text-xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default ProductCard