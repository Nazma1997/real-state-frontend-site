import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import Footer from '../../components/Footer'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaTwitterSquare } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { useState } from 'react'
import { useEffect } from 'react'
import { AiFillGoogleCircle, AiOutlineHome, AiOutlineKey, AiOutlineTwitter } from 'react-icons/ai'
import { BsEmojiSmile, BsFacebook } from 'react-icons/bs'

const AgentDetails = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);


  const counter = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount(i);
      }, 1000);
    }
  };
  const counter1 = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount1(i);
      }, 1000);
    }
  };

  const counter2 = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount2(i);
      }, 1000);
    }
  };



  useEffect(() => {
    counter(0, 950);
    counter1(0, 1000)
    counter2(0, 900)

  }, []);
  return (
    <>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Agent Details'} />

      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mb-10'>
        <div className="lg:flex  my-10">
          <div className=" lg:w-3/12 md:w-3/12 w-full  ">
            <div className='p-4 border border-slate-200 rounded-xl w-72 h-86'>
              <div className="relative w-64 h-80 mb-10 border border-slate-200 rounded-xl  mt-8">
                <img
                  src="https://htmldemo.net/ortiz/ortiz/assets/images/agents/agents-01.jpg"
                  alt="Card Image"
                  className="  object-cover "
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="hover-image py-28 px-12  rounded-2xl">
                    <h2 className="text-2xl font-bold my-5 text-center ">View Details</h2>
                    <div className='flex'>
                      <CiFacebook className='text-4xl' />
                      <FaTwitterSquare className='text-4xl mx-2' />
                      <CiLinkedin className='text-4xl' />
                      <CgMail className='text-4xl ml-2' />
                    </div>
                  </div>
                </div>
              </div>
              <p className='text-center text-xl font-bold text-sky-500'>Jassica Thomson</p>
              <p className='text-center  font-semibold text-sky-400'>Real Estate Agent</p>
            </div>
          </div>
          <div className="  bg-white mx-5">
            <p className='text-lg pt-10'><strong className='text-sky-500'>Jasica Thomson</strong> is a Specialist Real Estate Agent with 12 years of Experience in Real Estate field. He achive success with his honesty, determination, hardwork and commetment.</p>
            <h1 className='my-10 text-sky-500 text-xl font-semibold'>Biography</h1>
            <p className='text-lg'>Jasica Thomosn dolor sit amet, consectetur adipiscing elit, sed do od tempor incididunt ut labore et dolore magna iqua. Ut enim adini venia nod exercitation ullamco laboris nisiut some of the systemetic observe simple but she done it very smartly and simply</p>

            <div className='lg:flex md:flex justify-between my-10'>
              <div className='text-center'>
                <div className='flex justify-center'>
                  <AiOutlineHome className='text-5xl text-sky-400 mr-1' />
                  <h1 className='text-5xl text-sky-400'>{count} </h1>
                </div>
                <p className='text-center mt-3 font-semibold'>AWARD WIN</p>
              </div>
              <div className='text-center'>
                <div className='flex justify-center'>
                  <AiOutlineKey className='text-5xl text-sky-400 mr-1' />
                  <h1 className='text-5xl text-sky-400'>{count1} </h1>
                </div>
                <p className='text-center mt-3 font-semibold'>Happy Clients</p>
              </div>
              <div className='text-center'>
                <div className='flex justify-center'>
                  <BsEmojiSmile className='text-5xl text-sky-400 mr-1' />
                  <h1 className='text-5xl text-sky-400'>{count2} </h1>
                </div>
                <p className='text-center mt-3 font-semibold'>PROJECT DONE</p>
              </div>


            </div>
          </div>
          <p className='h-auto my-10 w-1 bg-slate-400'></p>
          <div className=" lg:w-3/12 md:w-3/12 w-full ml-12 ">
            <div className='my-10 '>
              <h1 className='text-xl text-sky-500 font-bold'>Call Me</h1>
              <h1 className='text-xl text-slate-500 my-3'>+880132554356</h1>
              <h1 className='text-xl text-slate-500 my-3'>+880132554356</h1>
            </div>
            <div className='my-10 '>
              <h1 className='text-xl text-sky-500 font-bold'>Mail me</h1>
              <h1 className='text-xl text-slate-500 my-3'>abcd@gmail.com</h1>
              <h1 className='text-xl text-slate-500 my-3'>abcd@gmail.com</h1>
            </div>
            <div className='my-10 '>
              <h1 className='text-xl text-sky-500 font-bold'>Also Find me here</h1>
              <div className='flex mt-10 '>
                <p className='px-3 py-2 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'><BsFacebook className='text-2xl mt-1' /></p>
                <p className='px-3 py-2  mx-3 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'><AiOutlineTwitter className='text-2xl mt-1' /></p>
                <p className='px-3 py-2 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'><AiFillGoogleCircle className='text-2xl mt-1' /></p>
              </div>
            </div>
          </div>
        </div>

       <div>
       <div className='lg:flex '>
          <div className=''>
            <div>
              <h1 className='text-2xl text-sky-500 font-bold'>Working Experience</h1>
              <p className='my-5 text-slate-700 text-lg mx-3'>Momen Bhyuan ipsum dolor sit amet, consectetur adipiscinged domod <br /> tempor incididunt ut labore et dolore magnaiqua</p>
            </div>
            <div>
              <h1 className='text-2xl text-sky-500 font-bold'>Senior Real Estate Broker</h1>
              <p className='my-5 text-slate-700 text-lg mx-3'>Momen Bhyuan ipsum dolor sit amet, consectetur adipiscinged domod <br />  tempor incididunt ut labore et dolore magnaiqua</p>
            </div>
            <div>
              <h1 className='text-2xl text-sky-500 font-bold'>Real Estate Agent</h1>
              <p className='my-5 text-slate-700 text-lg mx-3'>Momen Bhyuan ipsum dolor sit amet, consectetur adipiscinged domod <br />  tempor incididunt ut labore et dolore magnaiqua</p>
            </div>
            <div>
              <h1 className='text-2xl text-sky-500 font-bold'>Real Estate Executive</h1>
              <p className='my-5 text-slate-700 text-lg mx-3'>Momen Bhyuan ipsum dolor sit amet, consectetur adipiscinged domod <br />  tempor incididunt ut labore et dolore magnaiqua</p>
            </div>
          </div>
          <div className='lg:ml-10'>
            <h1 className='text-2xl text-sky-500 font-bold'>Contact for any Inquiry</h1>
            <div className='grid grid-cols-2'>
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Your Name' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Email' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Phone' />
            <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-full' placeholder='Subject' />
            </div>
            <textarea className='outline-none border border-slate-300 w-11/12 h-44 text-start pt-4 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Write here' />

            <button className='text-white bg-sky-400 px-10 py-2 mt-5  rounded-full hover:bg-black	font-semibold	'>Send</button>
          </div>
         
        </div>
       
       </div>
       



      </div>
      <Footer />

    </>
  )
}

export default AgentDetails
