import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import Footer from '../../components/Footer'
import BottomNavbar from '../../components/navigation/BottomNavbar'

const AddProperty = () => {
  return (
    <>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Add Property'} />

      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 1</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2'>
            <div>
              <h1 className='text-lg font-semibold'>Property Title</h1>
              <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Enter your title here' />
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Price</h1>
              <input className='outline-none border border-slate-300 w-8/12 h-12 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Price $' />
            </div>
          </div>
          <h1 className='text-lg font-semibold mt-5'>Property Text</h1>
          <textarea className='outline-none border border-slate-300 w-11/12 h-44 text-start pt-4 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Write here' />
        </div>

        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 2</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4'>
            <div>
              <h1 className='text-lg font-semibold'>Location</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Sub-location</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>property Type</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Status</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
          </div>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5'>
            <div>
              <h1 className='text-lg font-semibold'>No of Bedroom</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of Bathroom</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of garage</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Area</h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' >
                <option selected>Location 1</option>
                <option >Location 2</option>
                <option >Location 3</option>
              </select >
            </div>
          </div>

          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 3</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Image Gallery</h1>
          <div className='px-10 py-5 border border-sky-500 rounded-full'>
            <div className='flex justify-center'>
              <p className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white'>Browse Images</p>
            </div>
          </div>
          <h1 className='text-xl my-5 font-bold'>Video Presentation</h1>
          <div className='px-10 py-5 border border-sky-500 rounded-full'>
            <div className='flex justify-center'>
              <p className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white'>Browse Videos</p>
            </div>
          </div>

          <div className='flex justify-end my-16'>
              <button className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white'>Add Property</button>
            </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default AddProperty
