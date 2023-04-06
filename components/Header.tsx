import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser, HiOutlineTruck } from 'react-icons/hi2'

const Header = () => {
  const [isBagItem, setIsBagItem] = useState(true);

  return (
    <header className="element-center sticky top-0 z-30 w-full p-4 bg-emerald-100">
        <div className="element-center w-full lg:w-[1024px]">
            {/* Logo */}
            <div className="element-center mr-3">
                <Link href="/">
                    <div className="relative h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100">
                        <Image className="object-contain" src="https://res.cloudinary.com/nguyenhnhatquang/image/upload/v1626886904/logo_nwimwg.png" alt="" fill/>
                    </div>
                </Link>
            </div>
            {/* Search */}
            <div className="element-start w-full ">
                <div className="element-center relative w-full h-10 max-w-md">
                    <input className="h-full w-[calc(100%_-_0.5rem)] outline-none pl-6 pr-10 rounded-full" type="search" placeholder="Bạn cần tìm gì?"/>
                    <HiMagnifyingGlass className="absolute top-0 right-5 h-full cursor-pointer"/>
                </div>
            </div>
            {/* Right - shopping card*/}
            <div className="element-end ml-3">
                <div className="element-center header__button mr-[10px] min-[580px]:header__button--grid min-[580px]:w-[100px]">
                    <div className="flex items-center justify-end">
                        <HiOutlineTruck className="h-full text-[18px]"/>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="hidden text-[13px] subpixel-antialiased pl-1 min-[580px]:block">Đơn Hàng</span>
                    </div>
                </div>

                <div className="header__button relative w-10 min-[580px]:w-[100px] sm:mr-[10px]">
                    <div className="flex items-center justify-end">
                        <HiOutlineShoppingCart className="h-full text-[18px]"/>
                    </div>
                    
                    {
                        isBagItem && (
                            <>
                                <div className="flex text-center justify-center absolute bg-green-600 h-4 w-4 rounded-full top-7 left-[30px] text-white text-[11px] min-[580px]:left-[89px]">
                                    10
                                </div>
                            </>
                        )
                    }

                    <div className="flex items-center justify-start">
                        <span className="hidden text-[13px] subpixel-antialiased pl-1 min-[580px]:block">Giỏ Hàng</span>
                    </div>
                </div>

                <div className="hidden sm:header__button w-[100px]">
                    <div className="flex items-center justify-end">
                        <HiOutlineUser className="h-full text-[18px]"/>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="hidden text-[13px] max-w-[70px] subpixel-antialiased pl-1 whitespace-nowrap overflow-hidden min-[580px]:block">Đăng Nhập</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;