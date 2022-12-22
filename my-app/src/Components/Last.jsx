import React from 'react'
import L1 from "../Assets/L1.jpg"
import L2 from "../Assets/L2.jpg"
import L3 from "../Assets/L3.jpg"

export default function Last() {
  return (
    <div className='w-full lg:px-36 pb-32 text-[#061237]'>
      <div className='px-10'>
        <div className='flex flex-col mb-6 sm:flex-row justify-center items-center sm:justify-evenly'>
            <h1 className='text-5xl font-bold'>Resources</h1>
            <button className='my-6 bg-[#1355FF] text-white py-2 px-5'>Get Started</button>
        </div>
        <div className='grid sm:grid-cols-3 gap-10'>
            <div className=' '>
            <div className='flex items-center justify-center'>

                  <img src={L2} alt="" />
            </div>
                <div className='px-20 sm:px-0'>


                <h1 className='text-2xl font-bold text-left py-6'>A high-converting, high-performing template</h1>
                <p className='pb-6'>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
                <button className='#F7F9FC py-2 px-5'>Read Article</button>
                </div>
                

            </div>
            <div className='py-12 '>
            <div className='flex items-center justify-center'>

                  <img src={L3} alt="" />
            </div>
                <div className='px-20 sm:px-0'>


                <h1 className='text-2xl font-bold text-left py-6'>Opus made our journey possible</h1>
                <p className='pb-6'>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
                <button className='#F7F9FC py-2 px-5'>Read Article</button>
                </div>
                

            </div>
            <div className=' '>
            <div className='flex items-center justify-center'>

                  <img src={L1} alt="" />
            </div>
                <div className='px-20 sm:px-0'>


                <h1 className='text-2xl font-bold text-left py-6'>With a clean, minimal and professional look</h1>
                <p className='pb-6'>Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.</p>
                <button className='#F7F9FC py-2 px-5'>Read Article</button>
                </div>
                

            </div>
        </div>
      </div>
    </div>
  )
}
