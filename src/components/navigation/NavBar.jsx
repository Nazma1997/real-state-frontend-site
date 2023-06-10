import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsX } from 'react-icons/bs';
import logo from '../../images/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="lg:p-3 md:p-3 pb-8 top-bar-bg">
      <nav>
        <div className="lg:max-w-7xl lg:mx-auto px-4 lg:px-8">
          <div className="flex justify-between h-16">
            <img src={logo} className="top-bar-bg font-bold h-12 " />
            <div
              className={`lg:flex ${isOpen ? 'block' : 'hidden'
                } lg:my-2 md:my-2 mt-2`}
            >
              <Link to="/">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-black">
                  Home
                </p>
              </Link>
              <Link to="/services">
                <p className="px-7 py-3 rounded-full text-sky-400 hover:bg-sky-400 font-bold hover:text-black">
                  Services
                </p>
              </Link>
              <Link to="/features">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-black">
                  Features
                </p>
              </Link>
              
              <Link to="/properties">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-black">
                  Properties
                </p>
              </Link>
              <Link to="/blogs">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-black">
                  Blogs
                </p>
              </Link>
              <Link to="/register">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-black">
                  Agent
                </p>
              </Link>
              <Link to="/register">
                <p className="text-sky-400 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400   font-bold hover:text-black">
                  Contract
                </p>
              </Link>
              <div className="flex items-center">
                {!isModalOpen ? (
                  <button className="lg:block " onClick={toggleModal}>
                    <BsSearch className="text-sky-400 mt-1 text-2xl font-bold ml-7" />
                  </button>
                ) : (
                  <button className="lg:block hidden" onClick={toggleModal}>
                    <BsX className="text-sky-400 mt-4 text-2xl font-bold ml-1" />
                  </button>
                )}
              </div>


            </div>

            <button className="lg:hidden block" onClick={toggleMenu}>
              <svg className="w-6 h-6 fill-current text-gray-500 hover:text-black" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 11.4142L16.2426 7.17157C16.6332 6.78105 17.2667 6.78105 17.6573 7.17157C18.0479 7.5621 18.0479 8.19556 17.6573 8.58609L13.4142 12.8284L17.6573 17.0711C18.0479 17.4616 18.0479 18.0951 17.6573 18.4856C17.2667 18.8761 16.6332 18.8761 16.2426 18.4856L12 14.2426L7.75736 18.4856C7.36684 18.8761 6.73336 18.8761 6.34283 18.4856C5.95231 18.0951 5.95231 17.4616 6.34283 17.0711L10.5858 12.8284L6.34283 8.58609C5.95231 8.19556 5.95231 7.5621 6.34283 7.17157C6.73336 6.78105 7.36684 6.78105 7.75736 7.17157L12 11.4142Z"
                  />
                ) : (
                  <path
                    fill="#ffffff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 7L20 7V9L4 9V7ZM4 13L20 13V15L4 15V13ZM20 3H4V5H20V3Z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-screen-xl h-5/6">

            <button className="lg:block  " onClick={toggleModal}>
              <BsX className="text-sky-400  text-6xl font-bold -ml-6 -mt-6  " />
            </button>

            <div className='text-center mt-32 '>

              <input placeholder='Search' className='text-7xl border-b-4 border-sky-500 text-sky-500 outline-none' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;


