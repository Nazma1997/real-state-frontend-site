import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdOutlineEmail, MdPlace } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      <div className='top-bar-bg py-6'>
        <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-20 '>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-2 '>
            <div className=''>
              <h1 className='text-xl font-bold text-white'>About</h1>
              <p className='text-white font-bold mt-12'>Ortiz is the best and popular real estate to you  <br /> how all this  mistaolt cing pleasure and praising <br />  ained wasnad pain was prexplain</p>
              <div className='flex mb-10 '>
                <input className='border border-1 border-white outline-none lg:px-4 px-10 py-5 mt-5 top-bar-bg text-white text-xl font-bold' placeholder='Email For Newsletter' />
                <FaTelegramPlane className='mt-10 text-3xl text-white -ml-12' />
              </div>
            </div>
            <div className='ml-10'>
              <h1 className='text-xl font-bold text-white'>Popular Post</h1>
              <p className='text-white font-semibold mt-10'>Duplex Villa Design</p>
              <p className='text-white'>Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>
              <p className='text-white font-semibold mt-16'>Duplex Villa Design</p>
              <p className='text-white'>Lorem ipsum dolor sit amet, tur acinglit sed do eius</p>

            </div>
            <div className='ml-10'>
              <h1 className='text-xl font-bold text-white'>Quick Link</h1>
              <p className='text-white font-semibold mt-3'>Services</p>
              <p className='text-white font-semibold mt-3'>Agent</p>
              <p className='text-white font-semibold mt-3'>Properties</p>
              <p className='text-white font-semibold mt-3'>Features</p>
              <p className='text-white font-semibold mt-3'>Blog</p>
              <p className='text-white font-semibold mt-3'>Contract</p>

            </div>
            <div>
              <h1 className='text-xl font-bold text-white'>Contract Us</h1>
              <div className='flex mt-5'>
                <MdPlace className='text-4xl text-white mt-3 mr-2' />
                <p className='text-white'>256, 1st AVE, Manchester <br /> 125 , Noth England</p>
              </div>
              <div className='flex mt-5'>
                <BsTelephone className='text-3xl text-white mt-3 mr-3' />
                <p className='text-white'>Telephone : +88 (012) 356 958 45 <br />
                  Telephone : +88 (012) 356 958 45</p>
              </div>
              <div className='flex mt-5'>
                <MdOutlineEmail className='text-3xl text-white mt-3 mr-3' />
                <p className='text-white'>Email : info@example.com <br /> Web : www.example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 bg-sky-500'>
        <p className='text-center text-white '>© 2023 Copyright . All rights reserved by Nazma.</p>

      </div>
    </div>
  )
}

export default Footer
