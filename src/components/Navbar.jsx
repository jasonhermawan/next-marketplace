"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown, Drawer, Badge } from "antd";
import { usePathname, useRouter } from "next/navigation";
import CartNav from "./CartNav";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const token = localStorage.getItem("token");
  const cartItems = useSelector((state) => state.cart.value);
  const [open, setOpen] = useState(false);
  const items = [
    {
      key: "1",
      label: token ? (
        <Link href="/user/dashboard">
          <div className="w-32 py-1 px-2">
            <h3>Dashboard</h3>
          </div>
        </Link>
      ) : (
        <Link href="/login">
          <div className="w-32 py-1 px-2">
            <h3>Login</h3>
          </div>
        </Link>
      ),
    },
    {
      key: "2",
      label: token ? (
        <div
          className="w-32 py-1 px-2"
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <h3>Logout</h3>
        </div>
      ) : (
        <Link href="/register">
          <div className="w-32 py-1 px-2">
            <h3>Register</h3>
          </div>
        </Link>
      ),
    },
  ];

  useEffect(() => {
    items;
  }, [pathname]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    onClose()
  }, [pathname])

  return (
    <div className="fixed z-40 ">
      <div className="py-2 px-24 bg-blue-800 text-white flex justify-between items-center">
        <p className="text-sm font-light">
          <i className="bx bxs-phone"></i> Hotline 0812 3456 7890
        </p>
        <div>
          <ul className="flex gap-5 text-sm font-light">
            <li>About Us</li>
            <li>Location</li>
            <li>Customer Support</li>
          </ul>
        </div>
      </div>
      <div className="w-screen bg-white py-4 px-24 flex justify-between items-center">
        <div className="flex items-center gap-4 w-3/4">
          <Link href="/">
            <h1 className="font-semibold text-3xl">Commerce</h1>
          </Link>
          <input
            type="text"
            placeholder="Search Product"
            className="border w-3/4 py-2 px-4 rounded-md outline-none"
          />
        </div>
        <div className="flex gap-8 w-1/4 justify-end">
          <div className="flex flex-col text-center items-center">
            <Badge count={2}>
              <i className="bx bx-heart text-2xl cursor-pointer text-center" />
            </Badge>
            <h3 className="text-sm cursor-pointer">Wishlist</h3>
          </div>
          <div className="flex flex-col text-center items-center" onClick={showDrawer}>
            <Badge count={cartItems.length}>
              <i className="bx bx-cart text-2xl cursor-pointer" />
            </Badge>
            <h3 className="text-sm cursor-pointer">Cart</h3>
          </div>
          <Drawer title="Cart" placement="right" onClose={onClose} open={open}>
            <CartNav />
          </Drawer>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <div className="flex flex-col text-center">
              <i className="bx bx-user text-2xl cursor-pointer" />
              <h3 className="text-sm cursor-pointer">Account</h3>
            </div>
          </Dropdown>
        </div>
      </div>
      <div className="w-screen bg-neutral-100 py-1 px-24 flex justify-between items-center">
        <ul className="flex gap-5 text-sm">
          <li>Home</li>
          <li>Promotion</li>
          <li>Featured Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
