import React from 'react'
import { TfiControlPlay } from "react-icons/tfi";
import { GrCircleAlert } from "react-icons/gr";


const TitleContainer = ({title, overview}) => {
  return (
    <div className='absolute pt-[70px] pl-6 md:pt-48 md:pl-12 '>
        <h1 className='hidden sm:block text-3xl text-white font-bold'>{title}</h1>
        <h1 className='block sm:hidden text-md text-white font-bold'>{title.slice(0,12)}</h1>
        <p className='hidden sm:block text-white w-5/12 md:w-3/12 py-1 text-[10px] md:text-sm '>{overview}</p>
        <p className='block sm:hidden text-white w-5/12 md:w-3/12 py-1 text-[10px] md:text-sm '>{overview.slice(0,100)}</p>
        <div className='flex flex-row items-center gap-2'>
            <button className='bg-white text-black bg-opacity-60 rounded-md px-3 py-1 text-[12px] md:text-md md:px-5 md:py-2 flex flex-row items-center justify-center gap-2 font-semibold'><TfiControlPlay /> <span>Play</span></button>
            <button className='bg-black text-white bg-opacity-40 rounded-md px-3 py-1 text-[12px] md:text-md md:px-5 md:py-2 flex flex-row items-center justify-center gap-2 font-semibold'><GrCircleAlert /><span>More Info</span></button>
        </div>
    </div>
  )
}

export default TitleContainer