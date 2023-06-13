import React from 'react';

const ThirdPart = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8'>
      <div className='lg:flex md:flex  justify-between my-10  '>
        <div className="flex  relative lg:w-8/12 md:w-8/12 w-11/12 mr-5">
          <img src="https://i.ibb.co/DVczwPd/pexels-pixabay-259962.jpg" alt="the" className="rounded-2xl transform transition-transform hover:scale-105 " />
          <p className="absolute top-0 right-0  mt-2 bg-sky-500  font-bold text-white px-5 py-1 rounded-lg">For Sale</p>
          <p className="absolute bottom-0 left-0  mt-2 text-2xl font-bold  text-white px-5  mb-10 rounded-lg">Appartment</p>

        </div>

        <div className="flex relative lg:w-5/12 md:w-5/12  w-11/12 my-3 ">
          <img src="https://i.ibb.co/D4gZDFh/pexels-vecislavas-popa-813692.jpg" alt="the" className="rounded-2xl transform transition-transform hover:scale-105 " />
          <p className="absolute top-0 right-0  mt-2 bg-sky-500  font-bold text-white px-5 py-1 rounded-lg">For Rent</p>
          <p className="absolute bottom-0 left-0  mt-2 text-2xl font-bold  text-white px-5  mb-10 rounded-lg">Home</p>
        </div>

      </div>

      <div className='lg:flex  md:flex   justify-between my-10 '>

        <div className="flex relative  lg:w-5/12 md:w-5/12  w-11/12 my-3 mr-5">
          <img src="https://i.ibb.co/z5B8BWs/pexels-pixabay-271624.jpg" alt="the" className="rounded-2xl transform transition-transform hover:scale-105 " />
          <p className="absolute top-0 right-0  mt-2 bg-sky-500  font-bold text-white px-5 py-1 rounded-lg">For Sale</p>
          <p className="absolute bottom-0 left-0  mt-2 text-2xl font-bold  text-white px-5  mb-10 rounded-lg">Office</p>
        </div>
        <div className="flex relative lg:w-8/12 md:w-8/12 w-11/12">
          <img src="https://i.ibb.co/M2dHJfK/pexels-vecislavas-popa-1571468.jpg" alt="the" className="rounded-2xl transform transition-transform hover:scale-105 " />
          <p className="absolute top-0 right-0  mt-2 bg-sky-500 font-bold text-white px-5 py-1 rounded-lg">For Buy</p>
          <p className="absolute bottom-0 left-0  mt-2 text-2xl font-bold  text-white px-5  mb-10 rounded-lg">Farm House</p>
        </div>

      </div>
    </div>
  );
};

export default ThirdPart;
