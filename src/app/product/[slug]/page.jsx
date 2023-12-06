import axios from 'axios';
import React from 'react'

const DetailProduct = async (props) => {
  const params = props.params.slug;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product?id=${params}`)
  return (
    <div>
      <div className='flex'>
        <div className='w-2/5'>
          <img className='w-full' src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${response.data[0].product_images[0].image}`} alt={response.data[0].name} />
        </div>
        <div className='w-3/5 pl-10'>
          <h1 className='text-4xl font-semibold'>{response.data[0].name}</h1>
          <h3 className='text-2xl mt-4'>Rp {(response.data[0].normalPrice).toLocaleString("id")}</h3>
          <p className='mt-8'>{response.data[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct