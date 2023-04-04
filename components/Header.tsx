import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 w-full flex items-center justify-between p-4 bg-slate-400">
        {/* Logo */}
        <div className="flex items-center justify-center md:w-1/5">
            <Link href="/">
                <Image className="object-contain" src="https://res.cloudinary.com/nguyenhnhatquang/image/upload/v1626886904/logo_nwimwg.png" alt="" fill/>
            </Link>
        </div>
        {/* Search */}
        {/* Right */}
    </header>
  )
}

export default Header;