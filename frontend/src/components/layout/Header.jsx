import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import MobileSidebar from './MobileSidebar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter()
  const url = router.pathname
  const [active, setActive] = useState(url);

  useEffect(() => (
    setActive(url)
  ), [url]);

  return (
    <>
      <div className='flex items-center justify-between px-6 lg:px-20 py-4 sticky z-50 bg-white shadow-lg -top-2'>
        <div>
          <Image src={"/logo.svg"} width={91} height={45} />
        </div>
        <div>
          <ul className='text-darkGray text-sm font-medium gap-10 hidden md:flex'>
            <li className={`${active === "/" && "text-blackGray font-bold"} cursor-pointer transition-all`} onClick={() => setActive(1)}>
              <Link href={"/"}>Shop</Link>
            </li>
            <li className={`${active === "/shop/men" && "text-blackGray font-bold"} cursor-pointer transition-all`} onClick={() => setActive(2)}>
              <Link href={"/shop/men"}>Men</Link>
            </li>
            <li className={`${active === "/shop/women" && "text-blackGray font-bold"} cursor-pointer transition-all`} onClick={() => setActive(3)}>
              <Link href={"/shop/women"}>Women</Link>
            </li>
            <li className={`${active === "/shop/combos" && "text-blackGray font-bold"} cursor-pointer transition-all`} onClick={() => setActive(4)}>Combos</li>
          </ul>
        </div>
        <div className='relative hidden lg:flex'>
          <IoSearchOutline className='absolute text-darkGray top-2.5 left-4' />
          <input type="search" className='w-full bg-extraLightGray text-darkGray rounded-lg py-2 pl-10 pr-2 outline-none text-sm' placeholder='search' />
        </div>
        <div className='gap-3 hidden md:flex'>
          <div className='bg-extraLightGray px-2 py-2 rounded-lg'>
            <IoMdHeartEmpty color='darkGray' size={15} />
          </div>
          <div className='bg-extraLightGray px-2 py-2 rounded-lg'>
            <AiOutlineUser color='darkGray' size={15} />
          </div>
          <div className='bg-extraLightGray px-2 py-2 rounded-lg'>
            <PiShoppingCartSimple color='darkGray' size={15} />
          </div>
        </div>
        <div className='flex md:hidden'>
          <MobileSidebar />
        </div>
      </div>
    </>
  )
}

export default Header