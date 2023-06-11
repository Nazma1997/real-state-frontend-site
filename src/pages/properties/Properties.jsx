import React, { useState } from 'react';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import Footer from '../../components/Footer'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import MultiRangeSlider from '../../components/Range';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaTwitterSquare } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import PropertyLeftSide from '../../components/PropertyLeftSide';
import { Link } from 'react-router-dom';
import test from '../../images/test.png'


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
        <div className='lg:flex '>
          <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-4 mb-auto' >

              {
                allLatestProperties?.map(item =>


                  <Link to={`/properties/${item?.id}`} key={item?.id}>
                    <div className='bg-slate-100 pb-5 rounded-2xl '>
                      <img src={test} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105' />
                      <div className=' shadow-slate-700	'>
                        <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800">Desilva De Villa</h1>
                        <h3 className="text-slate-500 mx-2 mt-2">24 North Street, California, USA</h3>
                        <p className=" text-slate-500 mx-2 mt-2">3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
                        <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $54,000</h2>
                      </div>
                    </div>

                  </Link>

                )
              }
            </div>

            <div className='flex mt-10 justify-center'>
              <p className='px-6 py-5 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>01</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>02</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>03</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>04</p>

            </div>
          </div>

          <div>
            <PropertyLeftSide />


          </div>



        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Properties

