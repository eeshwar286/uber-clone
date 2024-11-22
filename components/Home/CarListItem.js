import Image from 'next/image'
import React from 'react'
import { HiMiniUser } from "react-icons/hi2";

function CarListItem({car,distance}) {
  return (
    <div className='flex items-center justify-between mt-7'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Image src={car.image}
                width={100} height={100}/>
                <div>
                    <h2 className='text-[18px] font-semibold flex gap-3 items-center'>
                        {car.name}
                        <span className='flex gap-0 text-[14px] font-medium items-center'>
                        <HiMiniUser />{car.seat}
                        </span>
                        </h2>
                    <p>{car.desc}</p>
                </div>
            </div>
        </div>
        <h2 className='text-[18px] font-semibold'>${(car.amount*distance).toFixed(2)}</h2>
    </div>
  )
}

export default CarListItem