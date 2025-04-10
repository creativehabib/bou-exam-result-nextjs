import Image from 'next/image'
import React from 'react'
import { justlogo, logo } from '../../../public/img'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-b-slate-200 bg-white/75 backdrop-blur-sm">
        <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-center">
            <a href="/">
            <div className="flex items-center">
                <Image src={justlogo} width={55} height={55} alt="logo" className="mt-2 mr-2" />
                <Image src={logo} alt="logo" width={350} height={50} className='hidden md:block' />
            </div>
            </a>
        </div>
        </nav>
    </header>
  )
}

export default Header