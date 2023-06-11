import React from 'react'

const Background = () => {
  return (
    <div className={`bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg')] background-image`}>
      <div className="flex  justify-between ">
        <div className="hero-content lg:mt-44 md:mt-36 mt-52  lg:ml-52 md:ml-24 ml-10">
        <h1 className='lg:text-6xl md:text-6xl text-2xl'>Desilva De Villa</h1>
        <h3 className="text-white my-3 lg:text-4xl md:text-4xl ">24 North Street, California, USA</h3>
        <p className=' lg:text-2xl md:text-2xl'>3520 sqft, 5 Bed, 3 Bath, 2 Garage</p>
        <h2 className="text-white lg:text-3xl md:text-3xl my-2">For Sale $54,000</h2>
        </div>
      </div>
    </div>

  )
}

export default Background



