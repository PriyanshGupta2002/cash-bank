import { navbarLinks } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-1 max-w-7xl m-auto w-full'>
        <Image
        alt='logo'
        src="/assets/herosectionassets/logo.svg"
        height={44}
        className='cursor-pointer'
        width={30}
        />
        <div className='hidden lg:flex items-center gap-4'>
            {navbarLinks.map((item,idx)=>(
                <Link href={item.link} key={idx} className='font-extrabold uppercase text-xs text-textPrimaryHero cursor-pointer'>{item.name}</Link>
            ))}
        </div>
        <Image
        className='hidden lg:block'
        alt='eye'
        src="/assets/herosectionassets/eye.svg"
        width={64}
        height={36}
        />
        <RxHamburgerMenu
        fontSize={26}
        className=' lg:hidden text-logoColor font-bold cursor-pointer'
        />
    </div>
  )
}

export default Navbar