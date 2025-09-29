import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className="w-full bg-[#FFF5EB] h-[6rem] flex justify-center items-center gap-x-16">
      <div className='flex items-center gap-x-2'>
        <Image src={"/feature1.webp"} alt='feature' width={70} height={70} />
        <div>
          <h1 className='text-[#343538] font-semibold'>Fast Delivery</h1>
          <p>Get in as fast as 1 hour</p>
        </div>
      </div>

      <div className='flex items-center gap-x-2'>
        <Image src={"/feature2.webp"} alt='feature' width={70} height={70} />
        <div>
          <h1 className='text-[#343538] font-semibold'>Fast Delivery</h1>
          <p>Get in as fast as 1 hour</p>
        </div>
      </div>

      <div className='flex items-center gap-x-2'>
        <Image src={"/feature3.webp"} alt='feature' width={70} height={70} />
        <div>
          <h1 className='text-[#343538] font-semibold'>Fast Delivery</h1>
          <p>Get in as fast as 1 hour</p>
        </div>
      </div>
    </div>
  )
}

export default Feature