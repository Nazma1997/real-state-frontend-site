import React from 'react'

const allLatestProperties = [
  {
    id: 1,
    title: 'the title'
  },
  {
    id: 2,
    title: 'the title'
  },
  {
    id: 3,
    title: 'the title'
  },
  {
    id: 4,
    title: 'the title'
  },
  {
    id: 5,
    title: 'the title'
  },
  {
    id: 6,
    title: 'the title'
  },
  {
    id: 7,
    title: 'the title'
  },
  {
    id: 8,
    title: 'the title'
  },

]

const PropertiesForSale = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8'>
      <h1 className='my-10 text-4xl font-semibold '>Property for Sale / <span className='text-slate-500'> Property for Rent</span></h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 md:gap-4 ' >

        {
          allLatestProperties?.map(item =>


            <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl " key={item?.id}>
              <div className="bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg')] bg-cover bg-center h-64 transform transition-transform hover:scale-105"></div>
              <div className="">
                <h1 className="text-2xl font-semibold bg-sky-500 py-4 text-center text-white hover:text-blue-800">Desilva De Villa</h1>
                <div className='p-6 md:p-8'>
                  <h3 className="text-slate-500 ">24 North Street, California, USA</h3>
                  <p className=" text-slate-500">3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
                  <h2 className="text-xl font-semibold mt-4 text-center text-slate-500">Price : $54,000</h2>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>

  )
}

export default PropertiesForSale
