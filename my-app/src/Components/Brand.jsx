import React from 'react'
import vc1 from "../Assets/vc1.png";
import vc3 from "../Assets/vc3.png";
import sugar from "../Assets/sugar.png";



export default function Brand() {
  return (
    <div className='w-full pt-[100px] sm:pt-[25vw] md:pt-[20vw] lg:pt-[15vw] px-16'>
        <div className=''>
            <div className=''>
                <h1 className='text-center text-2xl font-bold pb-4'>Trusted and loved by the world’s best teams</h1>
            </div>
            <div className='grid sm:grid-cols-4 py-10 items-center justify-evenly gap-20'>
                <div className='flex justify-center'>
                    <img src={vc1} alt="" />
                </div>
                <div className=' flex items-center justify-center'>
                <img src={vc3} alt="" className='w-6 h-6' /> 
 
                <h1 className='font-bold  text-gray-500 text-2xl'>stamp</h1>
                    
                </div>
                <div className='text-center'>
                    <h1 className='font-bold text-gray-500 text-2xl'>manter.</h1>
                </div>
                <div className='flex justify-center'>
                    <img src={sugar} alt=""  />
                </div>
            </div>
        </div>
    </div>
  )
}
