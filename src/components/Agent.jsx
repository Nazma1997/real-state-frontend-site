import React from 'react'
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaTwitterSquare } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';

const Agent = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mb-10'>
      <h1 className='text-center text-4xl font-bold'>Our Agents</h1>
      <p className='text-center text-xl my-5'>one of the most popular real estate company all around USA. You <br /> can find your dream property or build property with us</p>

   
     <div className='lg:flex grid md:grid-cols-2 gap-4	flex justify-center'>
     <div className='p-5 border border-slate-200 rounded-xl w-80 h-82'>
        <div className="relative w-64 h-80 mb-10 border border-slate-200 rounded-xl  mt-8">
          <img
            src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
            alt="Card Image"
            className="  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="hover-image py-32 px-12  rounded-2xl">
              <h2 className="text-2xl font-bold my-5 text-center ">View Details</h2>
              <div className='flex'>
                <CiFacebook className='text-4xl' />
                <FaTwitterSquare className='text-4xl mx-2' />
                <CiLinkedin className='text-4xl' />
                <CgMail className='text-4xl ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 border border-slate-200 rounded-xl w-80 h-82 lg:mx-5 '>
        <div className="relative w-64 h-80 mb-10 border border-slate-200 rounded-xl  mt-8 ">
          <img
            src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
            alt="Card Image"
            className="  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="hover-image py-32 px-12  rounded-2xl">
              <h2 className="text-2xl font-bold my-5 text-center ">View Details</h2>
              <div className='flex'>
                <CiFacebook className='text-4xl' />
                <FaTwitterSquare className='text-4xl mx-2' />
                <CiLinkedin className='text-4xl' />
                <CgMail className='text-4xl ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 border border-slate-200 rounded-xl w-80 h-82 lg:mx-5'>
        <div className="relative w-64 h-80 mb-10 border border-slate-200 rounded-xl  mt-8">
          <img
            src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
            alt="Card Image"
            className="  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="hover-image py-32 px-12  rounded-2xl">
              <h2 className="text-2xl font-bold my-5 text-center ">View Details</h2>
              <div className='flex'>
                <CiFacebook className='text-4xl' />
                <FaTwitterSquare className='text-4xl mx-2' />
                <CiLinkedin className='text-4xl' />
                <CgMail className='text-4xl ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-5 border border-slate-200 rounded-xl w-80 h-82'>
        <div className="relative w-64 h-80 mb-10 border border-slate-200 rounded-xl lg:ml-3 mt-8">
          <img
            src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
            alt="Card Image"
            className="  object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <div className="hover-image py-32 px-12  rounded-2xl">
              <h2 className="text-2xl font-bold my-5 text-center ">View Details</h2>
              <div className='flex'>
                <CiFacebook className='text-4xl' />
                <FaTwitterSquare className='text-4xl mx-2' />
                <CiLinkedin className='text-4xl' />
                <CgMail className='text-4xl ml-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Agent
