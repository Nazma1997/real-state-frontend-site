import React from 'react'
import { Link } from 'react-router-dom'
import test from '../images/test.png'
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
 

]
const BlogCard = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mb-10 mt-72 md:mt-16 lg:mt-16'>
      <h1 className='text-center text-4xl font-bold'>Latest Blog Post</h1>
      <p className='text-center text-xl my-5'>one of the most popular real estate company all around USA. You <br /> can find your dream property or build property with us</p>

      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 md:gap-4 ' >

{
  allLatestProperties?.map(item =>


    <Link to={`/blogs/${item.id}`} key={item.id}>
    <div className='bg-slate-100 pb-5 rounded-2xl '>
      <img src={test} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105' />
      <div className='mx-5 shadow-slate-700	'>
        <h1 className='text-xl font-semibold my-5 mx-2 hover:text-sky-500'>Duplex Appartment Latest Design</h1>
        <p className='mx-2 '>May 10, 2023 / 10 pm</p>
        <p className='mx-2'>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>
        <p className='mx-2 text-sky-500 '>Read More</p>
      </div>
    </div>

  </Link>

  )
}
</div>
   
    </div>
  )
}

export default BlogCard
