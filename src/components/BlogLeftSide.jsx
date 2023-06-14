import React from 'react'
import { Link } from 'react-router-dom'
import test from '../images/test.png'
import { useGetAllUsersQuery } from '../redux/apiSlice'



const BlogLeftSide = ({ searchTerm, handleSearch , allLatestProperties}) => {

  // console.log('ca', allLatestProperties?.map(item => item?.userId))
  const {data : allUsers} = useGetAllUsersQuery()
  

  
  
  return (
    <div className='lg:mx-5 mt-5'>
      <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Search Here</span></p>
      <input className='outline-none border border-sky-500 pr-24 h-12 mt-10 px-5 text-slate-800 rounded-3xl' placeholder='Enter your title here' value={searchTerm}
        onChange={handleSearch} />
      <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold my-10 '> <span className='ml-2  '>Category</span></p>
      <div className='my-10 flex justify-between'>
        <div>
          <p className='text-slate-700 text-lg'>Appartment</p>
          <p className='text-slate-700 text-lg mt-1'>Appartment Building</p>
          <p className='text-slate-700 text-lg  mt-1'>Duplex Villa</p>
          <p className='text-slate-700 text-lg  mt-1'>Corporate Building</p>
          <p className='text-slate-700 text-lg  mt-1'>Bangalow</p>
          <p className='text-slate-700 text-lg  mt-1'>Commercial Complex</p>
        </div>
        <div>
          <p className='text-slate-700 text-lg'>{allLatestProperties?.filter(item => item?.category === 'Appartment')?.length}</p>
          <p className='text-slate-700 text-lg  mt-1'>{allLatestProperties?.filter(item => item?.category === 'Appartment Building')?.length}</p>
          <p className='text-slate-700 text-lg  mt-1'>{allLatestProperties?.filter(item => item?.category === 'Duplex Villa')?.length}</p>
          <p className='text-slate-700 text-lg  mt-1'>{allLatestProperties?.filter(item => item?.category === 'Corporate Building')?.length}</p>
          <p className='text-slate-700 text-lg  mt-1'>{allLatestProperties?.filter(item => item?.category === 'Bangalow')?.length}</p>
          <p className='text-slate-700 text-lg  mt-1'>{allLatestProperties?.filter(item => item.category === 'Commercial Complex')?.length}</p>

        </div>
      </div>
      <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold '> <span className='ml-2  '>Recent Post</span></p>

      {
        allLatestProperties?.slice(0, 3)?.map(item =>
          <Link to={`/blogs/${item._id}`} key={item?.id} >
            <div className='flex mt-5'>
              <img src={item?.image} alt='the' className='w-28 h-20 my-3 transform transition-transform hover:scale-105 rounded-xl' />
              <div className='ml-2'>
                <h1 className='text-lg font-semibold hover:text-sky-700'>{item?.title}</h1>
                <p className='text-slate-400'><strong className='hover:text-sky-500'>Ronchi</strong> / 17 May, 2023</p>
                <p className='text-slate-400'>Lorem must explain to ten how all this mistakenea</p>

              </div>
            </div>

          </Link>
        )
      }


      <p className='border-b-2 border-l-2 border-sky-500 text-lg font-semibold my-5 '> <span className='ml-2  '>Latest Tweet</span></p>

      {
        allLatestProperties?.slice(0, 3).map(item => <Link to={`/blogs/${item._id}` } key={item._id}>
          <p  className='my-4'><strong className='text-sky-500'>@Design Concept</strong> {item?.text?.slice(0,50)}.
          <span className='text-sky-500'>Ronchi / 3 hour ago</span></p>
        </Link>)
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
