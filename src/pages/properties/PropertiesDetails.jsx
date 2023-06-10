import React from 'react'
import PropertyLeftSide from '../../components/PropertyLeftSide';
import TopBar from '../../components/navigation/Topbar';
import NavBar2 from '../../components/navigation/NavBar2';
import BottomNavbar from '../../components/navigation/BottomNavbar';

const PropertiesDetails = () => {
  return (
    <>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Property Details'} />
      <div className='lg:max-w-7xl lg:mx-auto lg:flex px-4 lg:px-8 mt-24 mb-16 '>
        <div className='mb-auto mt-10 bg-slate-100 rounded-2xl '>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg' alt='the' className='h-full rounded-t-2xl' />
          <div className='mx-6 text-slate-800 mb-16 '>
            <h1 className='mt-5 text-2xl font-bold'>Mariyasa de Casel</h1>
            <p className='text-lg mt-3 '>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam</p>
            <p className='text-xl mt-3'>Description</p>
            <p className='text-lg mt-3 mb-3'>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam ursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure

              Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam ursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone</p>
            <hr className='bg-slate-500 h-0.5 my-10' />
            <p className='text-xl  text-black
             '>Condition</p>
            <hr className='bg-slate-500 h-0.5 lg:w-2/12 md:w-2/12 w-4/12' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-4'>
              <h1><strong className='text-slate-700'>Areas :</strong> <span className='text-slate-500'>1200 sqrt</span></h1>
              <h1><strong className='text-slate-700'>Bedrooms :</strong> <span className='text-slate-500'>3 Bedrooms</span></h1>
              <h1><strong className='text-slate-700'>Bathrooms :</strong> <span className='text-slate-500'>3 Bathrooms</span></h1>
              <h1><strong className='text-slate-700'>Kitchen :</strong> <span className='text-slate-500'>2 Kitchens</span></h1>
              <h1><strong className='text-slate-700'>Living Rooms :</strong> <span className='text-slate-500'>3 Living rooms</span></h1>
              <h1><strong className='text-slate-700'>Garage :</strong> <span className='text-slate-500'>3 Garage</span></h1>
              
            </div>
            <div className='lg:flex  mt-3'>
            <h1 ><strong className='text-slate-700'>Address :</strong> <span className='text-slate-500'>22 Aveniew Tower (5th floor) First Street, Chicago, USA</span></h1>
              <h1 className='lg:ml-28 '><strong className='text-slate-700'>Price :</strong> <span className='text-lg font-bold text-sky-500'>$ 1200000</span></h1>


            </div>

            <hr className='bg-slate-500 h-0.5 my-10' />
            <p className='text-xl  text-black '>Amenities</p>
            <hr className='bg-slate-500 h-0.5 lg:w-2/12 md:w-2/12 w-4/12' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-4'>
              <h1><strong className='text-slate-700'>Areas :</strong> <span className='text-slate-500'>1200 sqrt</span></h1>
              <h1><strong className='text-slate-700'>Bedrooms :</strong> <span className='text-slate-500'>3 Bedrooms</span></h1>
              <h1><strong className='text-slate-700'>Bathrooms :</strong> <span className='text-slate-500'>3 Bathrooms</span></h1>
              <h1><strong className='text-slate-700'>Kitchen :</strong> <span className='text-slate-500'>2 Kitchens</span></h1>
              <h1><strong className='text-slate-700'>Living Rooms :</strong> <span className='text-slate-500'>3 Living rooms</span></h1>
              <h1><strong className='text-slate-700'>Garage :</strong> <span className='text-slate-500'>3 Garage</span></h1>
              
            </div>
            <div className='lg:flex  mt-3'>
            <h1 ><strong className='text-slate-700'>Address :</strong> <span className='text-slate-500'>22 Aveniew Tower (5th floor) First Street, Chicago, USA</span></h1>
              <h1 className='lg:ml-28 '><strong className='text-slate-700'>Price :</strong> <span className='text-lg font-bold text-sky-500'>$ 1200000</span></h1>


            </div>
           
          </div>
        </div>

        <PropertyLeftSide />
      </div>
    </>
  )
}

export default PropertiesDetails;
