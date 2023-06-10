import React from 'react'
import { CgMail } from 'react-icons/cg'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaTwitterSquare } from 'react-icons/fa'
import MultiRangeSlider from './Range'

const PropertyLeftSide = () => {
  return (
    <div>
      <div className='ml-5 mt-10'>
            <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Find Your home</span></p>
            <div className='grid grid-cols-2 mt-3 gap-4'>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>For Sale</option>
                <option className='bg-white  border border-white' >For Rent</option>
                <option className='bg-white  border border-white'>For Buy</option>

              </select>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Location </option>
                <option className='bg-white  border border-white' >Location 2</option>
                <option className='bg-white  border border-white'>Location 2</option>

              </select>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>All Type</option>
                <option className='bg-white  border border-white' >Location 2</option>
                <option className='bg-white  border border-white'>Location 2</option>
              </select>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Area(sqft)</option>
                <option className='bg-white  border border-white' >Location 2</option>
                <option className='bg-white  border border-white'>Location 2</option>
              </select>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Bedroom</option>
                <option className='bg-white  border border-white' >Location 2</option>
                <option className='bg-white  border border-white'>Location 2</option>
              </select>
              <select className='border border-slate-300 text-slate-500  rounded-2xl px-5 py-3 outline-none'>
                <option selected className='bg-white border border-white'>Bathroom</option>
                <option className='bg-white  border border-white' >Location 2</option>
                <option className='bg-white  border border-white'>Location 2</option>
              </select>

            </div>

            <MultiRangeSlider
              min={500}
              max={10000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}

            />

            <button className=" border border-sky-500 hover:border-slate-700 lg:px-28 py-3 md:px-7 px-5 mt-24 rounded-full bg-sky-500 font-bold text-xl text-white ml-3 hover:bg-slate-700">
              Search
            </button>

            <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold mt-10'> <span className='ml-2  '>New Added Property</span></p>

            <div className="  mt-10   w-full bg-slate-300 rounded-2xl" >
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/propertes/property-lg-01.jpg' alt='the' className='h-full w-full rounded-2xl' />
              <h1 className='text-slate-500  hover:text-blue-700 text-center lg:text-2xl md:text-xl  font-bold '>Duplex House</h1>
              <h1 className='text-sky-500   text-center lg:text-xl  font-bold my-3 pb-5'>Price $ 2000</h1>
            </div>
            <div className="  mt-10   w-full bg-slate-300 rounded-2xl" >
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/propertes/property-lg-01.jpg' alt='the' className='h-full w-full rounded-2xl' />
              <h1 className='text-slate-500  hover:text-blue-700 text-center lg:text-2xl md:text-xl  font-bold '>Duplex House</h1>
              <h1 className='text-sky-500   text-center lg:text-xl  font-bold my-3 pb-5'>Price $ 2000</h1>
            </div>


            <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold mt-10'> <span className='ml-2  '>Our Agent</span></p>

            <div className=' grid md:grid-cols-3 gap-4	 justify-center'>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 border border-slate-200 rounded-xl w-32 h-36'>
                <div className="relative w-28 h-32 mb-10 mx-2 mt-2 border border-slate-200 rounded-xl  ">
                  <img
                    src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                    alt="Card Image"
                    className="  object-cover h-24 mx-4 mt-4"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover-image w-28 h-32  rounded-2xl">
                      <h2 className="   text-center mt-10 ">Murgi kabir</h2>
                      <h2 className="   text-center  ">View Details</h2>
                      <div className='flex '>
                        <CiFacebook className='ml-4' />
                        <FaTwitterSquare className='ml-1' />
                        <CiLinkedin className='ml-1' />
                        <CgMail className=' ml-1' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold mt-10'> <span className='ml-2  '>Tag</span></p>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 mb-5 mt-5 gap-2'>
              <button className=" border border-sky-500 lg:px-6 py-3 md:px-7 px-5 rounded-full  font-bold text-sky-400 hover:bg-sky-400 hover:text-white  ">
                Real State
              </button>
              <button className="text-sky-400 border border-sky-500 lg:px-9 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white mx-3">
                Home
              </button>
              <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white">
                Duplex
              </button>
              <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white ml-3">
                Villa
              </button>
              <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white ml-3">
                Appartment
              </button>
              <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white ml-3">
                Property
              </button>
            </div>


          </div>
    </div>
  )
}

export default PropertyLeftSide
