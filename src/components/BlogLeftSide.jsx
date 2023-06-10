import React from 'react'
import { Link } from 'react-router-dom'
import test from '../images/test.png'

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
const BlogLeftSide = () => {
  return (
    <div className='lg:mx-5'>
    <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Search Here</span></p>
    <input className='outline-none border border-sky-500 pr-24 h-12 mt-10 px-5 text-slate-800 rounded-3xl' placeholder='Enter your title here' />
    <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold my-10 '> <span className='ml-2  '>Category</span></p>
    <div className='my-10 flex justify-between'>
      <div>
        <p className='text-slate-700 text-lg'>Appartment</p>
        <p className='text-slate-700 text-lg mt-1'>Appartment Building</p>
        <p className='text-slate-700 text-lg  mt-1'>Duplex Villa</p>
        <p className='text-slate-700 text-lg  mt-1'>Corporate Building</p>
        <p className='text-slate-700 text-lg  mt-1'>Bangalow</p>
        <p className='text-slate-700 text-lg  mt-1'>Commercial Comples</p>
      </div>
      <div>
        <p className='text-slate-700 text-lg'>24</p>
        <p className='text-slate-700 text-lg  mt-1'>24</p>
        <p className='text-slate-700 text-lg  mt-1'>24</p>
        <p className='text-slate-700 text-lg  mt-1'>24</p>
        <p className='text-slate-700 text-lg  mt-1'>24</p>
        <p className='text-slate-700 text-lg  mt-1'>24</p>

      </div>
    </div>
    <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Recent Post</span></p>

    {
      allLatestProperties?.slice(0, 3)?.map(item =>
        <Link to={`/properties/${item.id}`} key={item?.id} >
          <div className='flex mt-5'>
            <img src={test} alt='the' className='w-28 h-20 my-3 transform transition-transform hover:scale-105 rounded-xl' />
            <div className='ml-2'>
              <h1 className='text-lg font-semibold hover:text-sky-700'>Latest Design Home</h1>
              <p className='text-slate-400'><strong className='hover:text-sky-500'>Ronchi</strong> / 17 May, 2023</p>
              <p className='text-slate-400'>Lorem must explain to ten how all this mistakenea</p>

            </div>
          </div>

        </Link>
      )
    }


    <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold my-5 '> <span className='ml-2  '>Latest Tweet</span></p>

    {
      allLatestProperties?.slice(0, 3).map(item => <p key={item.id} className='my-4'><strong className='text-sky-500'>@Design Concept</strong> dolor sit amet, costetur acing elit, sed do eiusmod tempor corporis suscipit am, nisi ut aliquid ex ea commodi consequatur.
        <span className='text-sky-500'>Ronchi / 3 hour ago</span></p>)
    }

    <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold my-5 '> <span className='ml-2  '>Tag</span></p>
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
  )
}

export default BlogLeftSide
