import Image from 'next/image'
import React from 'react'

const Button = ({classname,text,src,alt}) => {
  return (
    <button className={`${classname} flex items-center gap-3 py-2 px-7 border-2 border-gray-300 text-textPrimaryHero uppercase rounded-xl font-extrabold text-xs`}>
        <Image
        src={src}
        width={20}
        height={20}
        alt={alt}
        />
            {text}
    </button>
  )
}

export default Button