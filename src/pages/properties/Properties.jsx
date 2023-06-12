import React, { useState } from 'react';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import Footer from '../../components/Footer'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import PropertyLeftSide from '../../components/PropertyLeftSide';
import { Link } from 'react-router-dom';
import { useGetPropertiesQuery } from '../../redux/apiSlice';




const Properties = () => {
  const { data: allProperties } = useGetPropertiesQuery();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (type) => {
    const item = allProperties?.filter((item) => item.type === type);
    setSelectedItem(item);
  };

  const handleShowAll = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Properties'} />
      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-16 '>
        <div className='flex justify-end mb-5'>
          <button className=" border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full bg-sky-500 font-bold text-white " onClick={handleShowAll}>
            All
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white mx-3" onClick={() => handleClick('Buy')}>
            For Buy
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white" onClick={() => handleClick('Rent')}>
            For Rent
          </button>
          <button className="text-sky-400 border border-sky-500 lg:px-7 py-3 md:px-7 px-5 rounded-full hover:bg-sky-400 font-bold hover:text-white ml-3" onClick={() => handleClick('Sale')}>
            For Sale
          </button>
        </div>
        <div className='lg:flex '>
          <div>


            {selectedItem ? (
              <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mb-auto'>
                {
                  selectedItem?.map(item =>

                    <div key={item.id} >
                      <Link to={`/properties/${item?._id}`} >
                        <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl " key={item?.id}>
                          {/* <div className={`bg-[url(${item?.image})] bg-cover bg-center h-64 transform transition-transform hover:scale-105`}></div> */}
                          <img src={item?.image} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105  ' />
                          {/* <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800 -mt-10">{item?.type}</h1> */}
                          <div className="">
                            <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800">{item?.title}</h1>
                            <div className='p-6 md:p-8'>
                              <h3 className="text-slate-500 ">{item?.subLocation}, {item?.location}</h3>
                              <p className=" text-slate-500">{item?.area}, {item?.bathroom} Bath, {item?.garage} Garage</p>
                              {/* <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $ {item?.price} </h2> */}
                              {
                                item?.type === 'Rent' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Rent : $ {item?.price}/m </h2> : ''
                              }
                              {
                                item?.type === 'Sale' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $ {item?.price} </h2> : ''
                              }
                              {
                                item?.type === 'Buy' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $ {item?.price} </h2> : ''
                              }
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              </div>
            ) : (
              <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mb-auto'>
                {
                  allProperties?.map(item =>


                    <div key={item.id} >
                      <Link to={`/properties/${item?._id}`} >
                        <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl " key={item?.id}>

                          <img src={item?.image} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105  ' />

                          <div className="">
                            <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800">{item?.title}</h1>
                            <div className='p-6 md:p-8'>
                              <h3 className="text-slate-500 ">{item?.subLocation}, {item?.location}</h3>
                              <p className=" text-slate-500">{item?.area}, {item?.bathroom} Bath, {item?.garage} Garage</p>

                              {
                                item?.type === 'Rent' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Rent : $ {item?.price}/m </h2> : ''
                              }
                              {
                                item?.type === 'Sale' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $ {item?.price} </h2> : ''
                              }
                              {
                                item?.type === 'Buy' ? <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $ {item?.price} </h2> : ''
                              }
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                  )
                }
              </div>
            )}
            {/* </div> */}

            <div className='flex mt-10 justify-center'>
              <p className='px-6 py-5 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>01</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>02</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>03</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>04</p>

            </div>
          </div>

          <div>
            <PropertyLeftSide />


          </div>



        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Properties

