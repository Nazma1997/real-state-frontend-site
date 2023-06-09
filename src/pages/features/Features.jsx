import React from 'react';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import Footer from '../../components/Footer'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import { BsFillBrushFill, BsShieldLockFill } from 'react-icons/bs';
import { MdChair } from 'react-icons/md';
import { CgDesignmodo } from 'react-icons/cg';



const Features = () => {
  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Features'} />
      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
        <div className='  lg:flex justify-between'>

          <div>

            <img src='https://htmldemo.net/ortiz/ortiz/assets/images/propertes/choose-01.jpg' alt="Card Image" className="object-cover w-8/12   ml-10 rounded-2xl " />

            <img src='https://htmldemo.net/ortiz/ortiz/assets/images/propertes/choose-02.jpg' alt="Card Image" className="object-cover w-8/12   lg:ml-44 md:ml-44 ml-24 lg:-mt-44 md:-mt-44 -mt-28 rounded-2xl " />



          </div>

          <div className='lg:ml-24 mt-5'>
            <h1 className='lg:text-4xl md:text-4xl text-xl font-bold'>We never compromize  with quality work...</h1>
            <p className='lg:text-xl my-9'>Ortiz is one of the most popular real estate company all around USA. <br /> You can find your dream property or build property</p>

            <div className='flex justify-between'>
              <div className='flex'>
                <BsFillBrushFill className='text-5xl text-sky-500' />
                <div className='ml-2'>
                  <h1 className='text-xl font-semibold'>Royel touch paint</h1>
                  <p>Paint is the mirron of beautifull <br /> house build property with us</p>
                </div>

              </div>
              <div className='flex'>
                <MdChair className='text-5xl text-sky-500' />
                <div className='ml-2'>
                  <h1 className='text-xl font-semibold'>Fully Furnished</h1>
                  <p>Well decorated and fully fuhed <br /> properties is available for all</p>
                </div>

              </div>

            </div>
            <div className='flex justify-between mt-10'>
              <div className='flex'>
                <CgDesignmodo className='text-5xl text-sky-500' />
                <div className='ml-2'>
                  <h1 className='text-xl font-semibold'>Latest Interior design</h1>
                  <p>All interior are latest and luxus <br /> mirron of beauty dream</p>
                </div>

              </div>
              <div className='flex'>
                <BsShieldLockFill className='text-5xl text-sky-500' />
                <div className='ml-2'>
                  <h1 className='text-xl font-semibold'>Non stop security</h1>
                  <p>Security in our property area is the <br /> main priority for our all</p>
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className='my-16'>
          <h1 className='lg:text-4xl md:text-4xl text-xl text-center font-bold'>Services that we provide</h1>
          <p className='lg:text-xl my-9 text-center'>Ortiz is one of the most popular real estate company all around USA.You can find your dream property or <br /> build property.</p>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7'>
            <div>
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-1.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>
            <div>
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-2.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>

            <div>
              <img src='  https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-3.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>
            <div>
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-4.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>
            <div>
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-5.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>
            <div>
              <img src='https://htmldemo.net/ortiz/ortiz/assets/images/icons/service-6.png' alt='the' />
              <h1 className='text-2xl  font-bold my-5'>Buy Property</h1>
              <p className='text-slate-600 text-lg'>We buy various of properties as like various people who want to sale their properites with trust</p>
            </div>
          </div>
        </div>



        <div className='grid lg:grid-cols-5 md:grid-cols-2  my-12'>
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/01.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/02.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/03.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/04.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />
          <img src='https://htmldemo.net/ortiz/ortiz/assets/images/brand/05.png' alt='the' className='mx-32 lg:mx-0 md:mx-24 mt-10' />

        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Features

