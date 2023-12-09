"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";
import { useRouter } from "next/navigation";

const CartNav = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const cartData = useSelector((state) => state.cart.value)

  const printCartList = () => {
    return cartData.map((val) => {
      return (
        <div className="p-2 mb-4 shadow-sm rounded-md" key={val.id}>
          <div className="flex gap-2 items-center">
            <img className="h-14" src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${val.product_images[0].image}`} alt={val.name} />
            <div className="truncate">
              <h1 className="truncate font-semibold">{val.name}</h1>
              <p>Qty: {val.quantity}</p>
            </div>
          </div>
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
    <div>
      {printCartList().length ? printCartList() : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      <div className="absolute bottom-10 left-6 right-6">
        <h3 className="mb-4 text-lg font-semibold">Total : {totalPrice.toLocaleString("id")}</h3>
        <button className="w-full bg-blue-800 text-white p-3 rounded-md" onClick={() => router.push("/checkout")}>
          Go to checkout page
        </button>
      </div>
    </div>
  )
};

export default CartNav;
