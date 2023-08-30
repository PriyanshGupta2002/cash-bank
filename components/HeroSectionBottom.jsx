import Image from 'next/image'
import React from 'react'
import Button from './Button'

const HeroSectionBottom = () => {
  return (
    <div className='max-w-7xl w-full m-auto flex items-center justify-between flex-wrap gap-3'>
        <div className='flex items-center gap-3'>
                <Button
                alt={"apple"}
                src={"/assets/herosectionassets/appleLogo.svg"}
                text={"App Store"}
                />
                <Button
                alt={"apple"}
                src={"/assets/herosectionassets/androidLogo.svg"}
                text={"Google Play"}
                />
        </div>
        <Image
        src="/assets/herosectionassets/arrow-down.svg"
        alt='arrow-down'
        width={18}
        height={30}
        />
        <div className='flex  gap-4 cursor-pointer'>
            <p className='text-[10px] w-[370px] text-privacyColor'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
        <Image
            alt='twitch'
            src="/assets/herosectionassets/frameTwitch.svg"
            height={24}
            width={24}
            />
            <Image
            alt='twitter'
            src="/assets/herosectionassets/frameTwitter.svg"
            height={24}
            width={24}
            />
              <Image
            alt='instagram'
            src="/assets/herosectionassets/frameInsta.svg"
            height={24}
            width={24}
            />
        </div>
        {/* <div className='flex items-center gap-3'>
            <p className='text-xs font-bold w-1/4'>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.
            </p>
            <Image
            alt='twitch'
            src="/assets/herosectionassets/frameTwitch.svg"
            height={24}
            width={24}
            />
            <Image
            alt='twitter'
            src="/assets/herosectionassets/frameTwitter.svg"
            height={24}
            width={24}
            />
              <Image
            alt='instagram'
            src="/assets/herosectionassets/frameInsta.svg"
            height={24}
            width={24}
            />
        </div> */}
    </div>
  )
}

export default HeroSectionBottom