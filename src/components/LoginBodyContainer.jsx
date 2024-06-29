import React from 'react'

const LoginBodyContainer = ({containerData,index}) => {
  
  if(index%2===0)
  return (
    <div className='bg-black flex flex-col md:flex-row py-8 gap-8  justify-between text-white px-10 sm:px-40 md:px-20 lg:px-40 items-center mb-2'>
        <div className=' w-full md:w-5/12'>
            <h1 className='text-2xl md:text-4xl font-bold'>{containerData.heading}</h1>
            <p className='text-lg md:text-2xl  mt-5 md:mt-10'>{containerData.paragraph}</p>
        </div>
        <div className=''>
            <div className='  relative z-10 w-[250px] h-[180px] lg:w-[400px] lg:h-[300px]'>
                <video className='' autoPlay playsInline muted loop class="appearance-none">
                    <source src={containerData?.imgVideo} type="video/mp4"/>
                </video>
                <img class="absolute top-0 z-10  " src={containerData.img} alt="Overlay Image"/>
            </div>
        </div>      
    </div>
  )

  return (
    <div className='bg-black flex flex-col md:flex-row py-8 gap-8 justify-between text-white px-10 sm:px-40 md:px-20 items-center mb-2'>
        <div className=''>
            <div className='order-last md:order-first relative z-10 w-[250px] h-[180px] lg:w-[400px] lg:h-[300px]'>
                <video className='' autoPlay playsInline muted loop class="appearance-none">
                    <source src={containerData?.imgVideo} type="video/mp4"/>
                </video>
                <img class="absolute top-0 z-10  " src={containerData.img} alt="Overlay Image"/>
            </div>
        </div> 
        <div className='order-first md:order-last w-full md:w-5/12'>
            <h1 className='text-2xl md:text-4xl font-bold'>{containerData.heading}</h1>
            <p className='text-lg md:text-2xl  mt-5 md:mt-10'>{containerData.paragraph}</p>
        </div>
    </div>
  )
}

export default LoginBodyContainer