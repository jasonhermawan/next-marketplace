import axios from 'axios';
import React from 'react'
import TransactionBtn from './transactionBtn';

const DetailProduct = async (props) => {
  const params = props.params.slug;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product?id=${params}`)
  return (
    <div>
      <div className='flex'>
        <div className='w-3/6'>
          <div className='flex gap-3 w-full'>
            <div className='w-1/5 flex flex-col gap-3'>
              <img className='w-full border rounded-md object-cover' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${response.data[0].product_images[0].image}`} alt={response.data[0].name} />
              <img className='w-full border rounded-md object-cover' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${response.data[0].product_images[0].image}`} alt={response.data[0].name} />
              <img className='w-full border rounded-md object-cover' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${response.data[0].product_images[0].image}`} alt={response.data[0].name} />
            </div>
            <img className='w-4/5 object-cover border rounded-md' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${response.data[0].product_images[0].image}`} alt={response.data[0].name} />
          </div>
        </div>
        <div className='w-3/6 pl-20'>
          <h1 className='text-4xl font-semibold'>{response.data[0].name}</h1>
          <p className='text-xl line-through mt-4 text-neutral-500'>{(response.data[0].discountPrice ? `Rp ${(response.data[0].normalPrice).toLocaleString("id")}` : "")}</p>
          <h3 className='text-2xl mt-2 font-semibold'>Rp {(response.data[0].discountPrice ? response.data[0].discountPrice : response.data[0].normalPrice).toLocaleString("id")}</h3>
          <p className='mt-8'>{response.data[0].description}</p>
          <TransactionBtn 
            data={response.data[0]}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailProduct