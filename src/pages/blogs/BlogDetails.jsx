import React from 'react'
import test from '../../images/test.png'
import { Link } from 'react-router-dom'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'

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

const BlogDetails = () => {
  return (
   <>
     <TopBar />
     <NavBar2 />
     <BottomNavbar text={'Blog Details'}/>

     <div>
      <div className='lg:flex '>
        <div>
          1st
        </div>

      </div>
     </div>
   </>
  )
}

export default BlogDetails
