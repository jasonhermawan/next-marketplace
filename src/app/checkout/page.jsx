"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { incrementQty, decrementQty, deleteCart } from "@/store/cartSlice";
import { Empty, Tooltip } from "antd";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const cartData = useSelector((state) => state.cart.value)
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch(incrementQty(id))
  }

  const decrement = (id) => {
    dispatch(decrementQty(id))
  }

  const deleteItem = (id) => {
    dispatch(deleteCart(id))
  }

  const printCartList = () => {
    return cartData.map((val) => {
      return (
        <div className="p-2 mb-4 rounded-md" key={val.id}>
          <div className='flex justify-between items-center'>
            <div className="flex gap-4 items-center">
              <img className="h-20" src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${val.product_images[0].image}`} alt={val.name} />
              <div className="truncate">
                <h1 className="truncate font-semibold">{val.name}</h1>
                <p>Rp {val.discountPrice ? (val.discountPrice*val.quantity).toLocaleString("id") : (val.normalPrice*val.quantity).toLocaleString("id")}</p>
              </div>
            </div>
            <div className='flex items-center gap-6'>
              <div className='flex items-center'>
                <button onClick={() => decrement(val.id)} className='border w-6 h-6 rounded-full flex flex-col items-center justify-center hover:bg-blue-800 hover:text-white'>-</button>
                <h1 className='w-12 text-center'>{val.quantity}</h1>
                <button onClick={() => increment(val.id)} className='border w-6 h-6 rounded-full flex flex-col items-center justify-center hover:bg-blue-800 hover:text-white'>+</button>
              </div>
              <Tooltip title="Delete item">
                <i className='bx bx-trash text-xl cursor-pointer' onClick={() => deleteItem(val.id)}></i>
              </Tooltip>
            </div>
          </div>
          <hr className='my-4'/>
        </div>
      )
    })
  }

  const total = () => {
    let total = 0;
    cartData.forEach((val) => {
      total += val.discountPrice ? val.discountPrice*val.quantity : val.normalPrice*val.quantity
    })
    setTotalPrice(total);
  }

  useEffect(() => {
    total()
  }, [cartData])

  return (
    <div className='flex w-full'>
      <div className='w-3/4 pr-10'>
        <h1 className='font-semibold text-2xl mb-2'>Cart Items</h1>
        <div className='p-2 shadow-md rounded-md'>
          {printCartList().length ? printCartList() : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        </div>
      </div>
      <div className='w-1/4 shadow-md p-4 rounded-md h-full'>
        <h1 className='font-semibold text-xl'>Order Summary</h1>
        <hr className='my-4'/>
        <div className='mb-2 flex justify-between'>
          <h3>Total Products</h3>
          <h3>Rp {totalPrice.toLocaleString("id")}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Shipping</h3>
          <h3>Rp 0</h3>
        </div>
        <hr className='my-4'/>
        <div className='flex justify-between'>
          <h3 className='font-semibold'>Total</h3>
          <h3 className='font-semibold'>Rp {totalPrice.toLocaleString("id")}</h3>
        </div>
        <button className='w-full bg-blue-800 rounded-md text-white p-2 mt-6'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart