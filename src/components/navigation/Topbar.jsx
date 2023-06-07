import React from 'react'
const TopBar = () => {
  return (
    <div className=" p-3 top-bar-bg">
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className='text-white font-semibold'>Call us - 21548 987 658</h1>
            </div>
          </div>

          <div className='flex'>
            <button className='text-white bg-sky-400 px-7 py-3 rounded-full hover:bg-black	font-semibold	'>Add Property</button>
            <p className='text-sky-400  px-7 py-3 rounded-full hover:bg-black	font-semibold mx-1	'>Register</p>
            <p className='text-white px-7 py-3 rounded-full hover:bg-black	font-semibold	'>Login</p>
          </div>
         
        </div>
      </div>
    
    </nav>
  </div>
  )
}

export default TopBar
