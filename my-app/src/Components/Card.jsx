import React from 'react'
import per1 from "../Assets/1.png";
import per2 from "../Assets/2.png";
import per3 from "../Assets/3.png";

export default function Card() {
  return (
    <div className='w-full py-32 bg-[#061237] text-white'>
    <div className='px-8 '>
    <div className='flex flex-col sm:flex-row sm:justify-evenly justify-center items-center pb-6'>

        <h1 className='text-5xl text-center font-bold pr-3'>Ways to work with us</h1>
        <button className='bg-[#1355FF] mb-6 p-2 mt-6 px-5'>Get Started</button>
    </div>
    <div className='grid sm:grid-cols-3 gap-16'>

    <div className='pt-4 flex flex-col'>
        <img src={per3} alt="" className='' />
        <h1 className='text-3xl font-medium py-4'>Project management</h1>
        <p className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius molestiae veritatis magnam modi!</p>
    </div>
    <div className='pt-4 flex flex-col'>
        <img src={per1} alt="" />
        <h1 className='text-3xl font-medium py-4'>Advancement Analysis</h1>
        <p className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius molestiae veritatis magnam modi!</p>
    </div>
    <div className='pt-4 flex flex-col'>
        <img src={per2} alt="" />
        <h1 className='text-3xl font-medium py-4'>Marketig & Dashboard</h1>
        <p className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque eius molestiae veritatis magnam modi!</p>
    </div>
    </div>
    </div>
      
    </div>
  )
}
