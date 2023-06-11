import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import { Link } from 'react-router-dom'
import test from '../../images/test.png'
import BlogLeftSide from '../../components/BlogLeftSide'
import Footer from '../../components/Footer'


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

]
const Blog = () => {
  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Blogs'} />


      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-16 '>

        <div className='lg:flex '>
          <div className='mb-auto'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mb-auto' >

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

                  </Link>)


              }
            </div>

            <div className='flex mt-10 justify-center'>
              <p className='px-6 py-5 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>01</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>02</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>03</p>
              <p className='px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'>04</p>

            </div>
          </div>

         <BlogLeftSide />



        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Blog
