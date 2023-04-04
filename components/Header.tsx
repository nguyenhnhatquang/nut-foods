import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi'

const Header = () => {
  const [isBagItem, setIsBagItem] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full flex items-center justify-center p-4 bg-slate-100">
        <div className="flex items-center justify-center w-full lg:w-[1024px] mr-4">
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
                    <HiOutlineSearch className="absolute top-0 left-4 h-full "/>
                    <input className="h-full w-[calc(100%_-_0.5rem)] outline-none px-8 rounded-full" type="text" placeholder="Bạn cần tìm gì?"/>
                </div>
            </div>
            {/* Right - shopping card*/}
            <div className="flex items-center justify-start ml-3">
                <div>
                    <HiOutlineShoppingBag className="absolute inset-y-0 h-full "/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;