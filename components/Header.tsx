import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi'

const Header = () => {
  const [isBagItem, setIsBagItem] = useState(true);

  return (
    <header className="sticky top-0 z-30 w-full flex items-center justify-center p-4 bg-slate-200">
        <div className="flex items-center justify-center w-full lg:w-[1024px]">
            {/* Logo */}
            <div className="flex items-center justify-center mr-3">
                <Link href="/">
                    <div className="relative h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
                        <Image className="object-contain" src="https://res.cloudinary.com/nguyenhnhatquang/image/upload/v1626886904/logo_nwimwg.png" alt="" fill/>
                    </div>
                </Link>
            </div>
            {/* Search */}
            <div className="flex items-center justify-start w-full">
                <div className="relative w-full flex items-center justify-center h-10 ">
                    <input className="h-full w-[calc(100%_-_0.5rem)] outline-none pl-6 pr-10 rounded-full" type="search" placeholder="Bạn cần tìm gì?"/>
                    <HiOutlineSearch className="absolute top-0 right-5 h-full cursor-pointer"/>
                </div>
            </div>
            {/* Right - shopping card*/}
            <div className="flex items-center justify-start ml-3">
                <div className="relative bg-slate-50 h-10 w-10 flex items-center justify-center rounded-xl cursor-pointer hover:bg-white">
                    <HiOutlineShoppingBag className="absolute inset-y-0 h-full text-2xl"/>
                    {
                        isBagItem && 
                        <div className="absolute bg-green-600 h-4 w-4 rounded-full top-7 left-7 text-white text-xs flex text-center justify-center">
                            10
                        </div>
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;