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
 

]
const BlogCard = () => {
  return (
    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mb-10 mt-72 md:mt-16 lg:mt-16'>
      <h1 className='text-center text-4xl font-bold'>Latest Blog Post</h1>
      <p className='text-center text-xl my-5'>one of the most popular real estate company all around USA. You <br /> can find your dream property or build property with us</p>

      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 md:gap-4 ' >

{
  allLatestProperties?.map(item =>


    <div className="relative max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl hover:shadow-xl p-10 border border-slate-300" key={item?.id}>
      <div className="bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg')] bg-cover bg-center h-64  w-full"></div>
      <div className="">
        <h1 className="text-2xl font-semibold  pt-2   hover:text-blue-800 ml-7">Desilva De Villa</h1>
        <p className='ml-7'>5th may , 2023</p>
        <div className='px-6 pb-6 pt-3 md:p-8'>
          <p>Real estate festival is one of the famous feval for explain to you how all this mistaolt deand praising pain wasnad I will give complete</p>

          
        </div>
        <p className='ml-7 text-sky-500 font-bold hover:underline'>See More</p>
      </div>
    </div>

  )
}
</div>
   
    </div>
  )
}

export default BlogCard
