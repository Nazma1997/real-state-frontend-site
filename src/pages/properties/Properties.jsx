import React, { useState } from 'react';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import Footer from '../../components/Footer'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'



const allLatestProperties = [
  {
    id: 1,
    title: 'the title'
  },
  {
    id: 2,
    title: 'the title'
  },
  {
    id: 3,
    title: 'the title'
  },
  {
    id: 4,
    title: 'the title'
  },
  {
    id: 5,
    title: 'the title'
  },
  {
    id: 6,
    title: 'the title'
  },

]



const Properties = () => {

  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Properties'} />
      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-16 '>
        <div className='flex justify-end mb-5'>
          <button className=" border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full bg-sky-500 font-bold text-white ">
           All
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white mx-3">
            For Buy
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white">
            For Rent
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white ml-3">
            For Sale
          </button>
        </div>
        <div className='lg:flex'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-4 ' >

            {
              allLatestProperties?.map(item =>


                <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl " key={item?.id}>
                  <div className="bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg')] bg-cover bg-center h-64 transform transition-transform hover:scale-105"></div>
                  <div className="">
                    <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800">Desilva De Villa</h1>
                    <div className='p-6 md:p-8'>
                      <h3 className="text-slate-500 ">24 North Street, California, USA</h3>
                      <p className=" text-slate-500">3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
                      <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $54,000</h2>
                    </div>
                  </div>
                </div>

              )
            }
          </div>

          <div className='ml-5'>
            <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Find Your home</span></p>
            <div className='grid grid-cols-2 mt-3 gap-4'>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>For Sale</option>
                <option  className='bg-white  border border-white' >For Rent</option>
                <option  className='bg-white  border border-white'>For Buy</option>

            </select>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Location </option>
                <option  className='bg-white  border border-white' >Location 2</option>
                <option  className='bg-white  border border-white'>Location 2</option>

            </select>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>All Type</option>
                <option  className='bg-white  border border-white' >Location 2</option>
                <option  className='bg-white  border border-white'>Location 2</option>
            </select>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Area(sqft)</option>
                <option  className='bg-white  border border-white' >Location 2</option>
                <option  className='bg-white  border border-white'>Location 2</option>
            </select>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Bedroom</option>
                <option  className='bg-white  border border-white' >Location 2</option>
                <option  className='bg-white  border border-white'>Location 2</option>
            </select>
            <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Bathroom</option>
                <option  className='bg-white  border border-white' >Location 2</option>
                <option  className='bg-white  border border-white'>Location 2</option>
            </select>
            
            </div>

         
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Properties

