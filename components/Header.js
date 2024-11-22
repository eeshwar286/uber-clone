import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon:'/taxi.png'
        },
        {
            id:2,
            name:'Package',
            icon:'/box.png'
        }

    ]
  return (
    <div className='p-0 pb-0 pl-2 border-b-[6px]
    border-gray-200 flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
            <img src='/Uber_Logo_Black_RGB.png'
            width={150} height={150}
            alt='Logo'/>
            <div className='flex gap-10 items-center'>
                {headerMenu.map((item)=>(
                    <div className='flex gap-2 items-center'>
                        <img src={item.icon}
                        width={20} height={20}/>
                        <h2 className='text-[14px] font-medium'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <div className='p-2 pl-4'>
        <UserButton
        appearance={{
            elements:{
                userButtonAvatarBox:{
                    width:'40px',
                    height:'40px',
                },
            },
        }}
        />
        </div>
    </div>
  )
}

export default Header