import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import BlogLeftSide from '../../components/BlogLeftSide'
import Footer from '../../components/Footer'
import { useGetAllUsersQuery, useGetBlogsQuery } from '../../redux/apiSlice'
import { useParams } from 'react-router-dom'



const BlogDetails = () => {

  const { data: allBlog } = useGetBlogsQuery()
  const {data : allUsers} = useGetAllUsersQuery();

  const { id } = useParams();
  const property = allBlog?.filter(item => item?._id === id)[0]
  const user = allUsers?.filter(item => item?._id === property?.userId)[0]

  // console.log('user', user)
  const words = property?.text.trim().split(/\s+/);
  const first100Words = words?.slice(0, 20).join(' ');

  
  const dateObj = new Date(property?.date);
  
  // console.log(property)


  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; 
  const year = dateObj.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return (
   <>
     <TopBar />
     <NavBar2 />
     <BottomNavbar text={'Blog Details'}/>

     <div className='lg:max-w-6xl lg:mx-auto lg:flex px-4 lg:px-8 mt-24 mb-16 '>
        <div className='mb-auto mt-5 bg-slate-100 rounded-2xl '>
          <img src={property?.image} alt='the' className='h-full rounded-t-2xl' />
          <div className='mx-6 text-slate-800 mb-16 '>
            <h1 className='mt-5 text-2xl font-bold'>{property?.title}</h1>
            <div className='flex'>
            <p className='text-slate-500 my-5 mr-2'>{user?.fName} {user?.lName} ,</p>
            <p className='text-slate-500 my-5'>{formattedDate}, 10 pm</p>

            </div>
            <p className='text-lg mt-3 '>{first100Words}</p>
            <p className='text-xl mt-3'>Description</p>
            <p className='text-lg mt-3 mb-3'>{property?.text}</p>
           
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
