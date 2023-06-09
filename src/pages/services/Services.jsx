import React from 'react';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import Footer from '../../components/Footer'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import { AiOutlineDollarCircle, AiOutlineSearch, AiOutlineUnlock } from 'react-icons/ai';
import { SiCoinmarketcap } from 'react-icons/si';
import Display from '../../components/Slider';


const Services = () => {
  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Services'} />
     <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
     <div className='  lg:flex'>
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/about/service.png' alt='the' className='md:mx-24'/>

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

      <div className='my-16'>
      <h1 className='lg:text-4xl md:text-4xl text-xl text-center font-bold'>Services that we provide</h1>
      <p className='lg:text-xl my-9 text-center'>Ortiz is one of the most popular real estate company all around USA.You can find your dream property or <br /> build property.</p>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7'>
        <div>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-1.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
        <div>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-2.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
      
        <div>
          <img src='  https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-3.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
        <div>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-4.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
        <div>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-5.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
        <div>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-6.png' alt='the' />
          <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
          <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
        </div>
      </div>
      </div>

      <Display />

      <div className='grid lg:grid-cols-5 md:grid-cols-2  my-12'>
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/01.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/02.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10'/>
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/03.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/04.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10'/>
        <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/05.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10'/>

      </div>

     </div>
    

      <Footer />
    </div>
  )
}

export default Services

