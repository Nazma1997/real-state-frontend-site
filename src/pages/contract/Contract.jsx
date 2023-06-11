import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import Footer from '../../components/Footer'
import { MdOutlineEmail, MdPlace } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'

const Contract = () => {
  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Contract us'}/>
      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-20'>
        <div className='lg:flex justify-between pb-10'>
          <div>
            <h1 className='text-2xl font-bold text-sky-500'>Get In Touch</h1>
            <h1 className='text-lg text-slate-500'>Ortiz is the best theme for elit, sed do eiusmod tempor dolor sit <br /> ame tse ctetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et lorna aliquatd minim veniam, <br /> quis nostrud exercitation oris nisi</h1>
            <div>
              
              <div className='flex mt-5'>
                <MdPlace className='text-4xl text-sky-500 mt-3 mr-2' />
                <p className='text-sky-500'>256, 1st AVE, Manchester <br /> 125 , Noth England</p>
              </div>
              <hr className='my-5'/>
              <div className='flex mt-5'>
                <BsTelephone className='text-3xl  text-sky-500 mt-3 mr-3' />
                <p className=''>Telephone : +88 (012) 356 958 45 <br />
                  Telephone : +88 (012) 356 958 45</p>
              </div>
              <hr className='my-5'/>
              <div className='flex mt-5'>
                <MdOutlineEmail className='text-3xl text-sky-500 mt-3 mr-3' />
                <p className=''>Email : info@example.com <br /> Web : www.example.com</p>
              </div>
              <hr className='my-5'/>
            </div>
          </div>
          <div>
          <div className='lg:ml-10'>
            <h1 className='text-2xl text-sky-500 font-bold'>Contact for any Inquiry</h1>
            <div className='grid grid-cols-2'>
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Your Name' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Email' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Phone' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Subject' />
            </div>
            <textarea className='outline-none border border-slate-300 w-11/12 h-44 text-start pt-4 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Message' />

            <button className='text-white bg-sky-400 px-10 py-2 mt-5  rounded-full hover:bg-black	font-semibold	'>Send</button>
          </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Contract
