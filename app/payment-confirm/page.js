"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function PaymentConfirmation() {

    const route=useRouter();
  return (
    <div className='bg-[#f1f1f1] flex
    h-screen
    items-center justify-center flex-col'>
        <h2 className='text-[40px] text-bold z-20 mt-[-60px]'>Payment Confimed</h2>
        <Image src='/uberconfirm.gif'
        width={500}
        height={200}
        className='object-cover mt-[-60px]'
        />
        <h2 className='font-bold 
        text-[23px] mt-[-20px] mb-10'>Your Uber is on the way . . .</h2>
        <button className='p-2 bg-black text-white
        px-10 rounded-lg'
        onClick={()=>route.push('/')}
        >Go Home</button>
    </div>
  )
}

export default PaymentConfirmation