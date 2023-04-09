import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMagnifyingGlass, HiOutlineShoppingCart, HiOutlineUser, HiOutlineTruck } from 'react-icons/hi2'

const Header = () => {
  const [isBagItem, setIsBagItem] = useState(true);

  return (
    <header className="flex items-center justify-center sticky top-0 z-30 w-full p-4 bg-[#99CC66]">
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
            <div className="element-start w-full ">
                <div className="element-center relative w-full h-10 max-w-md">
                    <input className="h-full w-[calc(100%_-_0.5rem)] outline-none pl-6 pr-10 rounded-full" type="search" placeholder="Bạn cần tìm gì?"/>
                    <HiMagnifyingGlass className="absolute top-0 right-5 h-full cursor-pointer"/>
                </div>
            </div>
            {/* Right - shopping card*/}
            <div className="flex items-center justify-end ml-3">
                <div className="header__button mr-[10px] min-[580px]:header__button--grid">
                    <div className="flex items-center justify-center w-auto min-[580px]:justify-end">
                        <HiOutlineTruck className="text-[18px]"/>
                    </div>
                    <div className="hidden text-[13px] pl-1 items-center justify-start min-[580px]:flex">
                        <span>Đơn Hàng</span>
                    </div>
                </div>

                <div className="header__button relative min-[580px]:header__button--grid sm:mr-[10px]">
                    <div className="flex items-center justify-center w-auto min-[580px]:justify-end">
                        <HiOutlineShoppingCart className="text-[18px]"/>
                    </div>
                    
                    {
                        isBagItem && (
                            <>
                                <div className="flex text-center justify-center absolute bg-[#007a00] h-4 w-4 rounded-full top-7 left-[30px] text-white text-[11px] min-[580px]:left-[89px]">
                                    <span>10</span>
                                </div>
                            </>
                        )
                    }

                    <div className="hidden text-[13px] pl-1 items-center justify-start min-[580px]:flex">
                        <span>Giỏ Hàng</span>
                    </div>
                </div>

                <div className="hidden sm:header__button sm:header__button--grid sm:mr-[10px]">
                    <div className="flex items-center justify-center w-auto min-[580px]:justify-end">
                        <HiOutlineUser className="text-[18px]"/>
                    </div>
                    <div className="hidden text-[13px] pl-1 items-center justify-start min-[580px]:flex">
                        <span>Đăng Nhập</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;