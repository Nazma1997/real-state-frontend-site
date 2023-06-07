import React from 'react';

const ThirdPart = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8'>
      <div className='lg:flex justify-between my-10 mx-10 '>
          <div className="flex mx-2">
            <img src="https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg" alt="Card Image" className="  h-96 transform transition-transform hover:scale-105 lg:w-10/12 md: w-full" />
            <p className=' text-white py-5 h-16 px-10 mt-5 -ml-4 location-module__badge'>Sale</p>
          </div>
       
          <div className="flex mx-2 mt-5 lg:mt-0">
            <img src="https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg" alt="Card Image" className="  h-96 transform transition-transform hover:scale-105 lg:w-full md: w-full" />
            <p className=' text-white py-5 h-16 px-10 mt-5 -ml-4 location-module__badge'>Rent</p>
          </div>

      </div>

      <div className='lg:flex justify-between my-10 mx-10 '>

          <div className="flex mx-2 pr-24">
            <img src="https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg" alt="Card Image" className="  h-96 transform transition-transform hover:scale-105 lg:w-full md: w-full" />
            <p className=' text-white py-5 h-16 px-10 mt-5 -ml-4 location-module__badge'>Rent</p>
          </div>
          <div className="flex mx-2 lg:mt-0 ">
            <img src="https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg" alt="Card Image" className="  h-96 transform transition-transform hover:scale-105 lg:w-full md: w-full" />
            <p className=' text-white py-5 h-16 px-10 mt-5 -ml-4 location-module__badge'>Sale</p>
          </div>

      </div>
    </div>
  );
};

export default ThirdPart;
