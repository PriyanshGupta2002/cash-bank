import HeroSectionBottom from '@/components/HeroSectionBottom'
import HeroSectionMiddle from '@/components/HeroSectionMiddle'
import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className=" h-full  text-white bg-black hero relative isolate p-3 overflow-hidden">
        <div className='p-2'>
            <Navbar/>
            <div className='absolute w-[75%] left-1/2 -translate-x-1/2 flex justify-between'>
              <Image
              src="/assets/herosectionassets/intro-cube 1.svg"
              alt='introCube'
              width={74}
              height={74}
              />
              <div className='w-20 h-20 lg:w-[200px] lg:h-[260px] relative'>
              <Image
              src="/assets/herosectionassets/intro-stairs 1.svg"
              alt='introCube'
              fill
              />
              </div>
            </div>
           <HeroSectionMiddle/>
           <div className='absolute w-[75%]  left-1/2 -translate-x-1/2 flex justify-between bottom-44 sm:bottom-36 -z-10 lg:-bottom-11 '>
            <div className='w-16 h-14 relative lg:w-[188px] lg:h-[176px]'>
              <Image
              src="/assets/herosectionassets/intro-cubes 1.svg"
              alt='introCube'
              fill
              />
              </div>
              <div className='w-20 h-20 lg:w-[280px] lg:h-[329px] relative'>
              <Image
              src="/assets/herosectionassets/intro-pillar 1.svg"
              className=''
              alt='introCube'
              fill
         
              />
              </div>
            </div>
            <HeroSectionBottom/>
        </div>
    </div>

  )
}

export default Hero