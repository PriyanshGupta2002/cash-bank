import React from 'react'
import Image from 'next/image'
const HeroSectionMiddle = () => {
  return (
    <div className='my-16 w-full flex flex-col items-center relative justify-center'>
    <div className='text-textPrimaryHero text-9xl lg:text-[193px] font-extrabold'>
        CASH
    </div>
    <div className='absolute w-[300px] h-[300px] lg:w-[370px] lg:h-[450px] top-0'>
    <Image
      alt='phone'
      src="/assets/herosectionassets/phone.svg"
      className="object-contain"
      fill
      />
      </div>
   <div className='text-textPrimaryHero text-9xl lg:text-[193px] font-extrabold z-10'>
        APP
    </div>
</div>
  )
}

export default HeroSectionMiddle