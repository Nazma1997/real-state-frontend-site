import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import BlogLeftSide from '../../components/BlogLeftSide'
import Footer from '../../components/Footer'



const BlogDetails = () => {
  return (
   <>
     <TopBar />
     <NavBar2 />
     <BottomNavbar text={'Blog Details'}/>

     <div className='lg:max-w-6xl lg:mx-auto lg:flex px-4 lg:px-8 mt-24 mb-16 '>
        <div className='mb-auto mt-5 bg-slate-100 rounded-2xl '>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/hero/hero-4.jpg' alt='the' className='h-full rounded-t-2xl' />
          <div className='mx-6 text-slate-800 mb-16 '>
            <h1 className='mt-5 text-2xl font-bold'>Duplex Appartment Latest Design</h1>
            <p className='text-slate-500 my-5'>May 10, 2018 / 10 pm</p>
            <p className='text-lg mt-3 '>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam</p>
            <p className='text-xl mt-3'>Description</p>
            <p className='text-lg mt-3 mb-3'>Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam ursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure

              Ortiz is one of the most popular real estate company all around USA. You can find your dream property or build property with us. We always provide importance to our customer that what they want or what they like ipsam ursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone</p>
           
           <p  className='text-lg mt-3'><strong>Tags:</strong> Apartment, Building, Real Estate, Commercial</p>

            </div>
          </div>

          {/* <BlogLeftSide /> */}
        </div>

     <Footer />
   </>
  )
}

export default BlogDetails
