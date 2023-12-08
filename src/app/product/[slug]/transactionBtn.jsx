"use client";
import React from "react";
import { message } from 'antd';
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";

const TransactionBtn = (props) => {
  const token = localStorage.getItem("token")
  const router = useRouter()
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onAddToCart = () => {
    if (token) {
      dispatch(addToCart(props.data))
      messageApi.open({
        type: 'success',
        content: 'Add to cart success',
        duration: 3,
      });
    } else {
      router.push("/login")
    }
  }

  return (
    <div>
      {contextHolder}
      <button className="w-full mt-12 border border-blue-800 text-blue-800 p-3 rounded-md cursor-pointer">
        Buy Now
      </button>
      <button className="w-full mt-3 bg-blue-800 text-white p-3 rounded-md cursor-pointer" onClick={() => onAddToCart()}>
        Add to cart
      </button>
    </div>
  );
};

export default TransactionBtn;
