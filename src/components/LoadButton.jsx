"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const LoadButton = () => {
  const router = useRouter();
  return (
    <button className="mt-10 p-3 w-full border rounded-md text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition-all" onClick={() => router.push("/explore")}>
      Load All Products
    </button>
  )
}

export default LoadButton