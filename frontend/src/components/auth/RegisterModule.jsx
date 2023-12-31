import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiHide, BiShow } from "react-icons/bi";

const RegisterModule = () => {
  return (
    <div className='flex'>
      <div className='relative w-1/2 h-screen'>
        <Image src={"/stock/register.jpg"} fill className='object-cover' objectPosition='top'/>
      </div>
      <div className='px-24 py-16 w-1/2'>
        <h1 className='font-semibold text-4xl tracking-wide pb-12'>Sign Up</h1>
        <button className='mb-12 flex gap-3 items-center justify-center text-[#8A33FD] border border-[#3C4242] rounded-lg text-xl font-medium py-4 w-full'><Image src={"/Google.svg"} height={20} width={20} /> Continue With Google </button>
        <div className='flex items-center mb-12'>
          <hr className='flex-1 border-t-2 border-[#d8d6d6] mr-4' />
          <span className='text-[#3C4242] text-lg'>OR</span>
          <hr className='flex-1 border-t-2 border-[#d8d6d6] ml-4' />
        </div>
        <form>
          <div className='flex flex-col pb-7'>
            <label className='pb-2 text-[#3C4242]'>Username or email address</label>
            <input type="text" className="text-[#807D7E] border border-[#3C4242] rounded-lg py-4 px-5" />
          </div>
          <div className='flex flex-col pb-7'>
            <div className='pb-2 flex justify-between items-center'>
              <label className='text-[#3C4242]'>Password</label>
              <div className='flex items-center gap-2'>
                <BiHide size={20} color='#807D7E'/>
                <span className='text-[#807D7E]'>Hide</span>
              </div>
            </div>
            <input type="password" className="text-[#807D7E] mb-2 border border-[#3C4242] rounded-lg py-4 px-5" />
            {/* <Link href="#" className='text-end text-sm underline'>Forget your password?</Link> */}
          </div>
          <button className='py-4 px-14 bg-[#8A33FD] text-white font-medium rounded-lg mb-2'>Sign Up</button>
          < div className='text-sm text-[#3C4242]'> 
            <span className='mr-1'>Already have an account?</span>
            <Link href="/auth/login" className='underline'>Log In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterModule;
