import React from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";

const CartNav = () => {
  const cartData = useSelector((state) => state.cart.value)
  console.log("cart data",cartData);

  const printCartList = () => {
    return cartData.map((val) => {
      return (
        <div className="p-2 mb-4 shadow-sm rounded-md">
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

  return (
    <div>
      {printCartList().length ? printCartList() : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </div>
  )
};

export default CartNav;
