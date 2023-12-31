import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiHide, BiShow } from "react-icons/bi";

const ForgetPassModule = () => {
  const [afterSubmitUi,setAfterSubmitUi] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <div className='flex'>
      <div className='relative w-1/2 h-screen'>
        <Image src={"/stock/forgetpass.jpg"} fill className='object-cover' />
      </div>
      <div className='px-24 py-16 w-1/2'>
        <h1 className='font-semibold text-4xl tracking-wide pb-2'>Reset Your Password</h1>
        <p className='pb-8 text-[#676B80] text-sm max-w-[460px]'>Enter your email and we'll send you a link to reset your password. Please  check it.</p>
        <form onSubmit={submitHandler}>
          <div className='flex flex-col pb-7'>
            <label className='pb-2 text-[#3C4242]'>Email</label>
            <input type="text" className="border focus:border-[#8A33FD] outline-none hover:border-[#8A33FD] border-[#3C4242] text-[#8A33FD] rounded-lg py-4 px-5" onChange={submitHandler} />
          </div>
          <button className='py-4 px-14 bg-[#8A33FD] text-white font-medium rounded-lg mb-2'>Send</button>
          < div className='text-sm text-[#3C4242]'> 
            <Link href="/auth/login" className='underline'>Back to login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassModule;
