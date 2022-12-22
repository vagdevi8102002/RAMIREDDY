import React from 'react';
import logoo from '../Assets/logoo.png';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';


export default function Navbar() {
  const [nav,setNav]=useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className='w-full'>
        <div className='flex flex-row justify-evenly py-6'>
            <div className='flex items-center justify-center gap-2'>
                <img src={logoo} alt="" />
                <h1>Opus</h1>
            </div>
            <div>
              <ul className='hidden sm:flex gap-16 text-[#37456C] font-medium'>
                <li>Overview</li>
                <li>Pages</li>
                <li>Templates</li>
              </ul>
            </div>
            <div>
              <button className='hidden sm:flex bg-[#1355FF] py-1 px-3 text-white'>Contact Us</button>
            </div>
            <div onClick={handleNav} className='sm:hidden text-[#1355FF] border p-2'>
              {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
        </div>

       


        <div className={!nav ? 'hidden ' : 'w-full bg-[#061237] p-2 text-white'}>
        <div className='flex justify-between p-2'>

           {/* <div className='flex '>
                <img src={logoo} alt="" className='pr-2'/>
                <h1>Opus</h1>
            </div> */}
           
        </div>
          <ul className='p-4 flex flex-col gap-4 font-bold'>
            <li className='border-b pb-2'>Overview</li>
            <li className='border-b pb-2'>Pages</li>
            <li className='border-b pb-2'>Templates</li>
          </ul>
          <div className='flex justify-center font-bold text-'>
            <button className='bg-[#1355FF] w-full py-2 my-6 mx-4 rounded'>Contact Us</button>
          </div>
        </div>

    </div>
  )
}
