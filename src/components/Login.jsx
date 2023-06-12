import React, { useState } from 'react';
import { FiFacebook } from 'react-icons/fi';
import { AiFillGoogleCircle, AiOutlineTwitter } from 'react-icons/ai';
import BottomNavbar from './navigation/BottomNavbar';
import Footer from '../components/Footer'
import TopBar from './navigation/Topbar'
import NavBar2 from './navigation/NavBar2'
import { Link, useNavigate } from 'react-router-dom';
import { useLogedUserMutation } from '../redux/apiSlice';
import { toast } from 'react-toastify';

const Login = () => {

  const [logedUser] = useLogedUserMutation();
  const [formData, setFormData] = useState({email: '', password:''});
  const navigate = useNavigate();

  const submitUser= e => {
    e.preventDefault();

    if(formData.email === '' || formData.password === ''){
      toast.error('Invalid Data');
      return;
    }
    logedUser(formData);
    toast.success('Login Successfully')
    setFormData({email:'', password:''})
    navigate('/')
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Login'} />

      <div className='lg:flex   lg:max-w-7xl lg:mx-auto px-4 lg:px-8 lg:mt-36 md: mt-32 mt- 24 mb-16'>
        <div className=' py-36 px-24 lg:my-24 bg-sky-500 rounded-l-lg'>
          <h1 className='text-center  text-2xl text-white '>Already have an Account?</h1>
          <h1 className='text-center  text-xl text-white mt-2'>Create free Account</h1>
          <Link to='/register'>
            <button className=' bg-white text-sky-500 px-10 py-3 rounded-full hover:bg-black hover:text-white	font-semibold	lg:mx-24 mx-8 mt-5 md:mx-56 '>Create </button>
          </Link>
        </div>
        <div className='bg-slate-100 pt-44 px-10 rounded-lg'>
          <h1 className='text-sky-500 -mt-32 text-center text-2xl font-semibold'>Login</h1>
         
          <input type='email' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36 px-10 mt-16 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='Email' name='email' value={formData.email}
            onChange={handleChange} /> <br />
          <input type='password' className='lg:px-10  lg:py-2 lg:mx-14 md:mx-28 md:px-36 mt-16 px-10 bg-slate-100 my-5 border-b-2 border-sky-500 text-sky-500 outline-none ' placeholder='Password'  name='password' value={formData.password}
            onChange={handleChange} /> <br />

          <button className=' bg-sky-500 text-white px-16 py-3 rounded-full hover:bg-black hover:text-white	font-semibold	lg:mx-24 mx-8 mt-24 md:mx-56 my-5' onClick={submitUser}>Login</button>
        </div>
        <div className=' py-36  lg:my-24 bg-sky-500  rounded-r-lg '>
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

export default Login

