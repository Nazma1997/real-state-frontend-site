import React, { useState } from 'react'
import {  AiOutlineDollarCircle, AiOutlineSearch, AiOutlineUnlock} from 'react-icons/ai';
import { SiCoinmarketcap } from 'react-icons/si';

const Compromise = () => {

  const [image, setImage] = useState('https://example.com/image1.jpg');

  const handleButtonClick = (newImage) => {
    setImage(newImage);
  };
  return (
    <div className='lg:flex lg:justify-between lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
      <div>
        <img src={image} alt="Card Image" className="object-cover w-full  transform transition-transform hover:scale-105 ml-10" />
        <div className=' h-72 bg-slate-100 -mt-52 w-96 '>
          <button onClick={() => handleButtonClick('https://htmldemo.net/ortiz/ortiz/assets/images/about/about-1.jpg')} className="px-4 py-2 mx-2 font-semibold text-sky-500  bg-slate-100 rounded  focus:outline-none mt-56 hover:underline">01</button>
          <button onClick={() => handleButtonClick('https://htmldemo.net/ortiz/ortiz/assets/images/about/about-2.jpg')} className="px-4 py-2 mx-2 font-semibold text-sky-500 bg-slate-100 rounded focus:outline-none hover:underline">02</button>
        </div>
      </div>
      <div className='mx-3'>
        <h1 className='lg:text-4xl md:text-4xl text-xl font-bold'>We never compromize  with quality work...</h1>
        <p className='lg:text-xl my-9'>Ortiz is one of the most popular real estate company all around USA. <br /> You can find your dream property or build property</p>

        <div className='flex justify-between'>
          <div className='flex'>
            <AiOutlineDollarCircle className='text-5xl text-sky-500' />
            <div className='ml-2'>
              <h1 className='text-xl font-semibold'>Minimum Cost</h1>
              <p>Privide low cost that help all <br /> more build real estate</p>
            </div>
            
          </div>
          <div className='flex'>
            <AiOutlineSearch className='text-5xl text-sky-500' />
            <div className='ml-2'>
              <h1 className='text-xl font-semibold'>Easy to Search</h1>
              <p>You can find your property to <br /> simply and easy way</p>
            </div>
            
          </div>

        </div>
        <div className='flex justify-between mt-10'>
          <div className='flex'>
            <SiCoinmarketcap className='text-5xl text-sky-500' />
            <div className='ml-2'>
              <h1 className='text-xl font-semibold'>Best Marketing</h1>
              <p>Provide low cost that help all <br /> more build real estate</p>
            </div>
            
          </div>
          <div className='flex'>
            <AiOutlineUnlock className='text-5xl text-sky-500' />
            <div className='ml-2'>
              <h1 className='text-xl font-semibold'>Secure</h1>
              <p>You can find your property to <br /> simply and easy way</p>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Compromise
