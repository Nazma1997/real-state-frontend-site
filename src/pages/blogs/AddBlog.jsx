import React from 'react'
import Footer from '../../components/Footer';
import BottomNavbar from '../../components/navigation/BottomNavbar';
import NavBar2 from '../../components/navigation/NavBar2';
import TopBar from '../../components/navigation/Topbar';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllUsersQuery } from '../../redux/apiSlice';
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log( BASE_URL)


const AddBlog = () => {
  const { data: getAllUsers } = useGetAllUsersQuery();
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(null);




  const email = localStorage.getItem('email');

  const getUser = getAllUsers?.filter(item => item.email === email)[0]
  const userId = getUser?._id
  // console.log(userId)

  const [formData, setFormData] = useState({ title: '',  text: '', category:'',  image: productImage, userId: userId });
  const apiKey = '837d05f4d0c9787e5980a5a7fe323afd';


  console.log(formData)
  const formSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.title === '' ||
      formData.text === '' ||
      formData.category === '' ||
      formData.image === '' ||
      formData.userId === ''
    ) {
      toast.error('Invalid Data');
      return;
    }

    const url = 'https://api.imgbb.com/1/upload';
    const imageFormData = new FormData();
    imageFormData.append('image', productImage);
    imageFormData.append('key', apiKey);

    try {
      const imgbbResponse = await axios.post(url, imageFormData);
      const image = imgbbResponse.data.data.url;


      await axios.post(`${BASE_URL}/api/v1/blogs`, {
        ...formData,
        image
      });

      toast.success('Blog Added Successfully');
      navigate('/blogs')
      setFormData({
        title: '',
        category: '',
        text: '',
        image: '',
        userId: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Error uploading image');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, userId, [name]: value }));
  };

  const handleImage = (event) => {
    setProductImage(event.target.files[0]);
  };
  return (
    <>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Add Blog'} />

      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 1</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2'>
            <div>
              <h1 className='text-lg font-semibold'>Blog Title <span className='text-red-500'>*</span></h1>
              <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Enter your title here' name='title' value={formData.title}
                onChange={handleChange} required />
            </div>
           
          </div>
          <h1 className='text-lg font-semibold mt-5'>Blog Text <span className='text-red-500'>*</span></h1>
          <textarea className='outline-none border border-slate-300 w-11/12 h-44 text-start pt-4 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Write here' name='text' value={formData.text}
            onChange={handleChange} />
        </div>

        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 2</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4'>
            <div>
              <h1 className='text-lg font-semibold'>Category <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='category' value={formData.category}
                onChange={handleChange}>
                <option>Select</option>
                <option >Appartment</option>
                <option >Appartment Building</option>
                <option >Duplex Villa</option>
                <option >Corporate Building</option>
                <option>Bangalow</option>
                <option>Commercial Complex</option>
              </select >

            </div>

           
            
          
            
          </div>

          

          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 3</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Image Gallery</h1>
          <div className='px-10 py-5 border border-sky-500 rounded-full'>
            <div className='flex justify-center'>
              <p className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white'><input type='file' name='image' className='bg-sky-500 ' onChange={handleImage} /></p>

              <input />
            </div>
          </div>
          {/* <h1 className='text-xl my-5 font-bold'>Video Presentation</h1>
          <div className='px-10 py-5 border border-sky-500 rounded-full'>
            <div className='flex justify-center'>
              <p className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white'>Browse Videos</p>
              <input type='file' name='video' value={formData.video}
                onChange={handleChange} />
            </div>
          </div> */}

          <div className='flex justify-end my-16'>
            <button className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white' onClick={formSubmit}>Add Blog</button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default AddBlog
