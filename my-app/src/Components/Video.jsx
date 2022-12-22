import React from 'react';
import videoo from "../Assets/videoo.jpg";
import {BsPlayFill,BsFillCircleFill} from "react-icons/bs";

export default function Video() {
  return (
    <div className='w-full py-16 '>
      <div className='text-left px-6'>
      <p className='py-6  text-gray-500 font-medium pl-6'>VIDEO TITLE</p>
      <h1 className='text-5xl py-6 font-bold text-[#061237] text-center'>Inform users with video sections</h1>
      <div>
        <div className='py-6 flex  justify-center items-center relative'>
            <img src={videoo} alt="" className='' />
        <div className='absolute  '>
            <BsFillCircleFill className='text-white w-[12vw] h-[12vw]  max-w-[95px] max-h-[95]'/>
        </div>
        <div className='absolute '>
            <BsPlayFill className='w-6 h-6'/>
        </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-2'>
      <div></div>
      <div>
      {/* md:w-[95px] md:h-[95px] */}
      <p className='text-gray-600 lg:w-[500px]  '>LOrem ipsum dolor sit amet consectetur adipisicing elit. Ex quis rem deleniti! Temporibus veniam doloribus necessitatibus tempora dolor dolore magni!</p>
      </div>


      </div>

      </div>
    </div>
  )
}
