import React from 'react'
import { Link } from 'react-router-dom'
import { useGetPropertiesQuery } from '../redux/apiSlice'


const PropertiesForSale = () => {
  const {data: allProperties} = useGetPropertiesQuery()
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8'>
      <h1 className='my-10 text-4xl font-semibold '>Property for Sale / <span className='text-slate-500'> Property for Rent</span></h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:gap-4 ' >

      {
          allProperties?.slice(0,9)?.map(item =>

          
          <Link to={`/properties/${item?._id}`} key={item.id}>
              <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl " key={item?.id}>
              
              {/* <img src={item?.image} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105 h-72 ' /> */}
              <div className="flex relative">
                            <img src={item?.image} alt="the" className="rounded-t-2xl transform transition-transform hover:scale-105 " />
                            <p className="absolute top-0 right-0 mr-2 mt-2 bg-sky-500  text-white px-5 py-1 rounded-lg">{item?.type}</p>
                          </div>
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

          )
        }
      </div>
    </div>

  )
}

export default PropertiesForSale
