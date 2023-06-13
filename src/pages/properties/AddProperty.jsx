import React, { useState } from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import Footer from '../../components/Footer'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import { useGetAllUsersQuery } from '../../redux/apiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_URL;
// console.log('Base', BASE_URL)

const AddProperty = () => {
 
  const { data: getAllUsers } = useGetAllUsersQuery();
  const navigate = useNavigate();
  const [productImage, setProductImage] = useState(null);




  const email = localStorage.getItem('email');

  const getUser = getAllUsers?.filter(item => item.email === email)[0]
  const userId = getUser?._id
  // console.log(userId)

  const [formData, setFormData] = useState({ title: '', price: '', text: '', location: '', subLocation: '', type: '', status: '', bedroom: '', bathroom: '', garage: '', area: '', kitchen: '', livingRoom: '', video: '', image: productImage, userId: userId });
  const apiKey = '837d05f4d0c9787e5980a5a7fe323afd';


  // console.log(formData)
  const formSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.title === '' ||
      formData.price === '' ||
      formData.text === '' ||
      formData.location === '' ||
      formData.subLocation === '' ||
      formData.type === '' ||
      formData.status === '' ||
      formData.bedroom === '' ||
      formData.bathroom === '' ||
      formData.garage === '' ||
      formData.area === '' ||
      formData.kitchen === '' ||
      formData.livingRoom === '' ||
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


      await axios.post(`${BASE_URL}/properties`, {
        ...formData,
        image
      });

      toast.success('Property Added Successfully');
      navigate('/')
      setFormData({
        title: '',
        price: '',
        text: '',
        location: '',
        subLocation: '',
        type: '',
        status: '',
        bedroom: '',
        bathroom: '',
        garage: '',
        area: '',
        kitchen: '',
        livingRoom: '',
        video: '',
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
      <BottomNavbar text={'Add Property'} />

      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-5'>
        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 1</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2'>
            <div>
              <h1 className='text-lg font-semibold'>Property Title <span className='text-red-500'>*</span></h1>
              <input className='outline-none border border-slate-300 w-11/12 h-12 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Enter your title here' name='title' value={formData.title}
                onChange={handleChange} required />
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Price <span className='text-red-500'>*</span></h1>
              <input className='outline-none border border-slate-300 w-8/12 h-12 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Price $' name='price' value={formData.price}
                onChange={handleChange} />
            </div>
          </div>
          <h1 className='text-lg font-semibold mt-5'>Property Text <span className='text-red-500'>*</span></h1>
          <textarea className='outline-none border border-slate-300 w-11/12 h-44 text-start pt-4 mt-5 px-5 text-slate-800 rounded-2xl' placeholder='Write here' name='text' value={formData.text}
            onChange={handleChange} />
        </div>

        <div>
          <h1 className='text-4xl font-bold text-sky-500 mt-10'>Step # 2</h1>
          <hr className='bg-sky-500 h-0.5 mt-2 w-3/12  text-sky-500' />
          <h1 className='text-xl my-5 font-bold'>Basic Information</h1>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4'>
            <div>
              <h1 className='text-lg font-semibold'>Location <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='type' value={formData.location}
                onChange={handleChange}>
                <option>Select</option>
                <option >Dhaka</option>
                <option >Chittagong</option>
                <option >B-Baria</option>
                <option >Sylet</option>
              </select >

            </div>
            <div>
              <h1 className='text-lg font-semibold'>Sub-location <span className='text-red-500'>*</span></h1>
              <input className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='subLocation' value={formData.subLocation}
                onChange={handleChange} placeholder='Sub Location' />

            </div>
            <div>
              <h1 className='text-lg font-semibold'>property Type <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='type' value={formData.type}
                onChange={handleChange}>
                <option>Select</option>
                <option >Sale</option>
                <option >Rent</option>
                <option >Buy</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Status <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='status' value={formData.status}
                onChange={handleChange} >
                <option>Select</option>
                <option >Available</option>
                <option >Coming soon</option>
                <option >Out of sale</option>
              </select >
            </div>
          </div>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-5'>
            <div>
              <h1 className='text-lg font-semibold'>No of Bedroom <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='bedroom' value={formData.bedroom}
                onChange={handleChange}>
                <option>Select</option>
                <option >01</option>
                <option >02</option>
                <option >03</option>
                <option >04</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of Bathroom <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='bathroom' value={formData.bathroom}
                onChange={handleChange} >
                <option>Select</option>
                <option >01</option>
                <option >02</option>
                <option >03</option>
                <option >04</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of Kitchen <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='kitchen' value={formData.kitchen}
                onChange={handleChange} >
                <option>Select</option>
                <option >01</option>
                <option >02</option>
                <option >03</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of Living Room <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='livingRoom' value={formData.livingRoom}
                onChange={handleChange} >
                <option>Select</option>
                <option >01</option>
                <option > 02</option>
                <option >03</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>No of garage <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='garage' value={formData.garage}
                onChange={handleChange} >
                <option>Select</option>
                <option > 01</option>
                <option >02</option>
                <option >03</option>
              </select >
            </div>
            <div>
              <h1 className='text-lg font-semibold'>Area <span className='text-red-500'>*</span></h1>
              <select className='outline-none border border-slate-300 w-10/12 h-12 mt-5 px-5  text-sky-500 rounded-2xl' name='area' value={formData.area}
                onChange={handleChange}>
                <option>Select</option>
                <option >600 sqrt</option>
                <option >1100 sqrt</option>
                <option >1200 sqrt</option>
                <option >1500 sqrt</option>
                <option >1600 sqrt</option>
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
            <button className='bg-sky-500 px-8 py-4 rounded-full text-xl text-white' onClick={formSubmit}>Add Property</button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default AddProperty
