import React from 'react'
import {GiArrowCursor} from "react-icons/gi";
import Vector from "../Assets/Vector.svg";
import vector2 from "../Assets/vector2.svg";

export default function Kit() {
  return (
    <div className='w-full py-16'>
      <div className='grid sm:grid-cols-2 gap-20'>
      <div className='text-left px-8'>
        <h1 className='text-5xl font-bold sm:w-[400px]'>Make your site better with Opus</h1>
        <div className='sm:pl-16'>

        <p className='text-lg py-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil saepe voluptatibus quo dignissimos soluta. Molestiae por Lorem ipsum dolor sit amet.ro distinctio a veniam laboriosam.</p>
        <button className='bg-[#1355FF] py-2 mt-6 text-white px-6'> Learn More</button>
        </div>
      </div>
      <div className='p-16'>
      <div>
        <img src={vector2} alt="" />
        <h1 className='font-bold text-2xl'>Build or Customize a Website in Minutes</h1>
      </div>
      <div className='py-12'>
        <img src={Vector} alt="" />
        <h1 className='font-bold text-2xl'>Build or Customize a Website in Minutes</h1>
      </div>
      </div>

      </div>
    </div>
  )
}
