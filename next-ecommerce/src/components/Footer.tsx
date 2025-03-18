import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-24">
        <div className="w-full md:w-1/1 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">DEV</div>
          </Link>
          <p>47 Abbas El Akkad St., Nasr city, Cairo</p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">+1 234 567 898</span>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/moaaz.adly.52" target="_blank">
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </a>
            <a href="" target="_blank">
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col  gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col  gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">ACCESSOIRES</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col  gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account </Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/1 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first one get the latest news about trends, promotions, new
            arrivals, and much more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email for subscription"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-primary text-white">join</button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex justify-between">
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2025 DEV Shop all rights reserved</div>
        <div className="">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span>United States | English</span>
          </div>
        </div>
      </div>
    </div>
  );
}
