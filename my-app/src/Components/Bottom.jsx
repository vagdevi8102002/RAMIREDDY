import React from 'react';
import vectorl from "../Assets/vectorl.svg";

export default function Bottom() {
  return (
    <div className='w-full lg:px-32 text-[#061237]'>
      <div className='px-10'>
        <div className='flex gap-2 items-center pb-10'>
        <img src={vectorl} alt="" />
            <h1 className='font-bold text-lg'>Opus</h1>
        </div>
        <div className='grid sm:grid-cols-5'>
            <div className='py-4 sm:col-span-1'>
                <h1 className='text-gray-500 font-bold pb-6 text-lg'>Overview</h1>
                <ul className='flex flex-col gap-3 font-bold'>
                    <li>Overview</li>
                    <li>Landings</li>
                    <li>Company</li>
                    <li>Pricing</li>
                    <li>CMS Pages</li>
                    <li>Accounts</li>
                    <li>Buy for Figma</li>
                </ul>
            </div>
            <div className='py-4 sm:col-span-1'>
                <h1 className='text-gray-500 font-bold pb-6 text-lg' >Pages</h1>
                <ul className='flex flex-col font-bold gap-3'>
                    <li>Landing 1</li>
                    <li>Landing 2</li>
                    <li>Landing 3</li>
                    <li>Company 1</li>
                    <li>Company 2</li>
                    <li>Company 3</li>
                    <li>Blog 1</li>
                    <li>Blog 2</li>
                    <li>Contact 1</li>
                    <li>Contact 2</li>
                    <li>Contact 3</li>
                </ul>
            </div>
            <div className='py-4 sm:col-span-1'>
                <h1 className='text-gray-500 font-bold pb-6 text-lg'>Pages</h1>
                <ul className='flex flex-col font-bold gap-3'>
                    <li>Case Studies</li>
                    <li>Careers</li>
                    <li>Pricing 1</li>
                    <li>Pricing 2</li>
                    <li>Pricing 3</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Forgot Password</li>
                    <li>Blog Post</li>
                    <li>Team Member</li>
                    <li>Case Study</li>
                    <li>Job Post</li>
                </ul>
            </div>
            <div className='sm:col-span-2 py-6'>
                <div className='flex items-center justify-center sm:justify-start sm:pl-4'>
                    <input type="Email" placeholder='Email address' className='px-4  py-2' />
                    <button className='bg-[#1355FF] text-white py-2 px-5'>Get Started</button>
                </div>
                <div className='grid sm:grid-cols-2 py-6 justify-center items-center'>
                    <div className='py-6'>
                        <h1 className='text-sm font-bold text-gray-500'>OPUS FOR WEBFLOW</h1>
                        <p className='text-[#1355FF] font-bold text-xl'>Lorem Ipsum</p>
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-500'>OPUS FOR FIGMA</h1>
                        <p className='text-[#1355FF] font-bold text-xl'>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='flex gap-2 justify-center py-4'>
                    <p>Template by <span className='text-[#1355FF]'>Lorem</span></p>- <p>Powered by <span className='text-[#1355FF]'>Lorem</span></p>
                </div>
            </div>
        </div>
        <div className='flex justify-evenly pb-12 sm:justify-start sm:gap-10'>
            <p>Style Guide</p>
            <p>License</p>
            <p>changelog</p>
        </div>
      </div>
    </div>
  )
}
