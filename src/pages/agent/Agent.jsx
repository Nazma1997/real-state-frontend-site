import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import { CiFacebook, CiLinkedin } from 'react-icons/ci'
import { FaTwitterSquare } from 'react-icons/fa'
import { CgMail } from 'react-icons/cg'
import { Link } from 'react-router-dom'
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
  {
    id: 7,
    title: 'the title'
  },
  {
    id: 8,
    title: 'the title'
  },

]

const Agent = () => {
  return (
    <>
    <TopBar />
    <NavBar2 />
    <BottomNavbar text={'Agent'}/>

    <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 gap-4	'>

{
  allLatestProperties?.map(item => <Link to={`/agents/${item.id}` } key={item.id}>
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
      </div>
  </Link>)
}
     
    
     </div>
    </div>
    <Footer />
      
    </>
  )
}

export default Agent
