import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
const NavBar = () => {
  return (
    <div className=" lg:p-3 md:p-3 pb-8 top-bar-bg">
    <nav >
      <div className="lg:max-w-7xl lg:mx-auto px-4  lg:px-8">
        <div className="lg:flex md:flex lg:justify-between md:justify-between h-16">
              <img src={logo} className='top-bar-bg font-semibold 	 w-24 h-12' />
          <div className='flex lg:my-2 md:my-2 mt-2'>
           
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Home</p>
           </Link>
            <Link to='/login'>
            <p className=' px-7 py-3 rounded-full text-sky-400  hover:bg-sky-400 font-semibold hover:text-black'>Services</p>
            </Link>
            <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Features</p>
           </Link>
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Register</p>
           </Link>
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Properties</p>
           </Link>
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Pages</p>
           </Link>
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Agent</p>
           </Link>
           <Link to='/register'>
           <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold  hover:text-black	'>Contract</p>
           </Link>
          </div>
         
        </div>
      </div>
    
    </nav>
  </div>
  )
}

export default NavBar
