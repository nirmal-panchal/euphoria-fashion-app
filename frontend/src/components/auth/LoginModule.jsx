import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiHide, BiShow } from "react-icons/bi";

const LoginModule = () => {
  return (
    <div className='flex'>
      <div className='relative w-1/2 h-screen'>
        <Image src={"/stock/login.jpg"} fill className='object-cover' />
      </div>
      <div className='px-24 py-16 w-1/2'>
        <h1 className='font-semibold text-4xl tracking-wide pb-12'>Sign In</h1>
        <button className='mb-12 flex gap-3 items-center justify-center text-brightPurple border border-blackGray rounded-lg text-xl font-medium py-4 w-full'><Image src={"/Google.svg"} height={20} width={20} /> Continue With Google </button>
        <div className='flex items-center mb-12'>
          <hr className='flex-1 border-t-2 border-[#d8d6d6] mr-4' />
          <span className='text-blackGray text-lg'>OR</span>
          <hr className='flex-1 border-t-2 border-[#d8d6d6] ml-4' />
        </div>
        <form>
          <div className='flex flex-col pb-7'>
            <label className='pb-2 text-blackGray'>Username or email address</label>
            <input type="text" className="border border-blackGray rounded-lg py-4 px-5" />
          </div>
          <div className='flex flex-col pb-7'>
            <div className='pb-2 flex justify-between items-center'>
              <label className='text-blackGray'>Password</label>
              <div className='flex items-center gap-2'>
                <BiHide size={20} color='darkGray'/>
                <span className='text-darkGray'>Hide</span>
              </div>
            </div>
            <input type="password" className="mb-2 border border-blackGray rounded-lg py-4 px-5" />
            <Link href="/auth/forgetpassword" className='text-end text-sm underline'>Forget your password?</Link>
          </div>
          <button className='py-4 px-14 bg-brightPurple text-white font-medium rounded-lg mb-2'>Sign In</button>
          < div className='text-sm text-blackGray'> 
            <span className='mr-1'>Don't have an account?</span>
            <Link href="/auth/register" className='underline'>Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModule;
