"use client";
import React from "react";

const TransactionBtn = () => {
  return (
    <div>
      <button className="w-full mt-12 border border-blue-800 text-blue-800 p-3 rounded-md cursor-pointer">
        Buy Now
      </button>
      <button className="w-full mt-3 bg-blue-800 text-white p-3 rounded-md cursor-pointer">
        Add to cart
      </button>
    </div>
  );
};

export default TransactionBtn;
