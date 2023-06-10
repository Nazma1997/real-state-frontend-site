import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const TopBar = () => {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsNavbarFixed(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = isNavbarFixed
    ? 'fixed top-0 left-0 w-full top-bar-bg z-10' // Fixed navbar styles
    : 'relative'; // Default navbar styles
  return (
    <div className=" lg:p-3 md:p-3 pb-8 top-bar-bg">
      <nav className={navbarClasses} >
        <div className="lg:max-w-7xl lg:mx-auto px-4  lg:px-8">
          <div className="lg:flex md:flex lg:justify-between md:justify-between h-16">
            <h1 className='text-white font-semibold text-center	lg:my-6 md:my-6' >Call us - 21548 987 658</h1>
            <div className='flex lg:my-2 md:my-2 mt-2'>
              <Link to='/add-property' >
                <button className='text-white bg-sky-400 px-7 py-2  rounded-full hover:bg-black	font-semibold	'>Add Property</button>
              </Link>

              <Link to='/register'>
                <p className='text-sky-400  lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400	font-semibold lg:mx-1 md:mx-1 mx-2 hover:text-black	'>Register</p>
              </Link>
              <Link to='/login'>
                <p className='text-white px-7 py-3 rounded-full hover:bg-sky-400 font-semibold	hover:text-black'>Login</p>
              </Link>
            </div>

          </div>
        </div>

      </nav>

    </div>
  )
}

export default TopBar
