import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <>
    <div>
      <Image src='/uber-banner.jpg' width={900} height={1000}
      className='object-contain h-full w-full'/>
      <div className='absolute top-24 left-60'>
        <SignIn/>
      </div>
    </div>
    </>


  )
}