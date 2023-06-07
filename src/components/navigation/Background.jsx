import React from 'react'

const Background = () => {
  return (
    <div className={`bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg')] background-image`}>
      <div className="flex  justify-between ">
        <div className="hero-content lg:mt-44 md:mt-36 mt-10  lg:ml-52 md:ml-24 ml-10">
        <h1 className='text-6xl'>Desilva De Villa</h1>
        <h3 className="text-white my-3 text-4xl">24 North Street, California, USA</h3>
        <p className=' text-2xl'>3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
        <h2 className="text-white text-3xl my-2">For Sale $54,000</h2>
        </div>
      </div>
    </div>

  )
}

export default Background



