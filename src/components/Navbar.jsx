import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-screen py-4 px-52 flex justify-between border-b border-neutral-800 items-center">
      <div className="flex items-center gap-12">
        <Link href="/">
          <h1 className="text-2xl font-semibold">Next Marketplace</h1>
        </Link>
        <ul className="flex gap-4 font-light">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
          <Link href="/blogs">
            <li>Blogs</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4 font-normal text-sm">
        <button className="px-4 py-2 text-white rounded-md border border-gray-800">
          Login
        </button>
        <button className="px-4 py-2 bg-slate-200 text-black rounded-md">
          Register
        </button>
      </div>
    </div>
  )
}

export default Navbar