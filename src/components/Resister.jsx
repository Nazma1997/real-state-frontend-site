import React, { useState } from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiFillGoogleCircle, AiOutlineTwitter } from 'react-icons/ai';
import BottomNavbar from './navigation/BottomNavbar';
import Footer from '../components/Footer'
import TopBar from './navigation/Topbar'
import NavBar2 from './navigation/NavBar2'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../redux/apiSlice';
import { toast } from 'react-toastify';

const Resister = () => {

  const [createUser] = useCreateUserMutation();
  const [formData, setFormData] = useState({ fName: '', lName: '', password: '', email: '' });
  const navigate = useNavigate();

  const submitUser = (event) => {
    event.preventDefault();

    if (
      formData.fName === '' ||
      formData.lName === '' ||
      formData.email === '' ||
      formData.password === ''
    ) {
      toast.error('Invalid Data');
      return;
    }

    createUser(formData);

    toast.success('User Created Successfully!');

    // Clear the form
    setFormData({ fName: '', lName: '', password: '', email: '' });
    navigate('/login')
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };
  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Register'} />

      <div className='lg:flex   lg:max-w-7xl lg:mx-auto px-4 lg:px-8 lg:mt-36 md: mt-32 mt- 24 mb-16'>
        <div className=' py-36 px-24 lg:my-24 bg-sky-500 rounded-l-lg'>
          <h1 className='text-center  text-2xl text-white '>Already have an Account?</h1>
          <Link to='/login'>
            <button className=' bg-white text-sky-500 px-10 py-3 rounded-full hover:bg-black hover:text-white	font-semibold	lg:mx-24 mx-8 mt-5 md:mx-56 '>Login</button>
          </Link>
        </div>
        <div className='bg-slate-100 pt-56 px-10 rounded-lg'>
          <h1 className='text-sky-500 -mt-44 text-center text-2xl font-semibold'>Register</h1>
          <input type='text' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36  px-10 mt-10 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='First name' name='fName' value={formData.fName}
            onChange={handleChange} /> <br />
          <input type='text' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36 px-10 mt-10 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='Last name' name='lName' value={formData.lName}
            onChange={handleChange} /> <br />
          <input type='email' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36 px-10 mt-10 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='Email' name='email' value={formData.email}
            onChange={handleChange} /> <br />
          <input type='password' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36 mt-10 px-10 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='Password' name='password' value={formData.password}
            onChange={handleChange} /> <br />

          <button className=' bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-black hover:text-white	font-semibold	lg:mx-24 mx-8 mt-5 md:mx-56 my-5' onClick={submitUser}>Create an Account</button>
        </div>
        <div className=' py-36  lg:my-24 bg-sky-500  rounded-r-lg'>
          <p className='text-white mx-32 text-xl -mt-20 text-center' >Log with</p>
          <div className='flex px-20 mt-10 md:mx-24'>
            <FiFacebook className='text-2xl text-white mt-2' />
            <p className='text-white ml-3 text-xl mt-2'> Facebook</p>

          </div>
          <div className='flex px-20 mt-5  md:mx-24'>
            <AiOutlineTwitter className='text-2xl text-white mt-2' />
            <p className='text-white ml-3 text-xl mt-2'> Twitter</p>

          </div>
          <div className='flex px-20 mt-5  md:mx-24'>
            <AiFillGoogleCircle className='text-2xl text-white mt-2' />
            <p className='text-white ml-3 text-xl mt-2'> Google</p>

          </div>


        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Resister
