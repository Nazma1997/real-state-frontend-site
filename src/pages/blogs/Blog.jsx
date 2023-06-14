import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar2 from '../../components/navigation/NavBar2'
import BottomNavbar from '../../components/navigation/BottomNavbar'
import { Link } from 'react-router-dom'
import test from '../../images/test.png'
import BlogLeftSide from '../../components/BlogLeftSide'
import Footer from '../../components/Footer'
import { useGetBlogsQuery } from '../../redux/apiSlice'
import { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'



const Blog = () => {

  const { data: allLatestProperties } = useGetBlogsQuery()


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const createdAt = allLatestProperties?.map(item => item.date);
  const dateObj = new Date(createdAt);
  



  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1; // Months are zero-based, so add 1
  const year = dateObj.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setSearchResults([]);
    } else {
      const results = allLatestProperties.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  // Pagination
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);


  const totalItems = allLatestProperties?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = allLatestProperties?.slice(startIndex, endIndex);


  return (
    <div>
      <TopBar />
      <NavBar2 />
      <BottomNavbar text={'Blogs'} />


      <div className='lg:max-w-7xl lg:mx-auto px-4 lg:px-8 mt-24 mb-16 '>

        <div className='lg:flex '>
          <div className='mb-auto'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 mb-auto' >

              {searchTerm === ''

                ? displayedItems?.map(item =>
                  <Link
                    to={`/blogs/${item._id}`} key={item.id}>
                    <div className='bg-slate-100 pb-5 rounded-2xl '>
                      <img src={test} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105' />
                      <div className='mx-5 shadow-slate-700	'>
                        <h1 className='text-xl font-semibold my-5 mx-2 hover:text-sky-500'>{item?.title}</h1>
                      
                        <p className='mx-2'>{item?.text.slice(0, 90)}.</p>
                        <p className='mx-2 text-sky-500 '>Read More</p>
                      </div>
                    </div>

                  </Link>)

                : searchResults.map((item) => (
                  <Link to={`/blogs/${item._id}`} key={item.id}>
                    <div className='bg-slate-100 pb-5 rounded-2xl '>
                      <img src={test} alt='the' className='rounded-t-2xl transform transition-transform hover:scale-105' />
                      <div className='mx-5 shadow-slate-700	'>
                        <h1 className='text-xl font-semibold my-5 mx-2 hover:text-sky-500'>{item?.title}</h1>
                        <p className='mx-2'>{item?.text.slice(0, 90)}.</p>
                        <p className='mx-2 text-sky-500 '>Read More</p>
                      </div>
                    </div>

                  </Link>
                ))}
            </div>

            <div className='flex mt-10 justify-center'>


              <button
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
                className='px-6 py-5 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'
              >
                <BiLeftArrow />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`${currentPage === index + 1 ? 'active' : ''} px-6 py-5 ml-1 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold`}


                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
                className='px-6 py-5 rounded-full hover:bg-sky-500 border border-sky-500 hover:text-white text-sky-500 font-semibold'
              >
                <BiRightArrow />
              </button>

            </div>
          </div>

          <BlogLeftSide searchTerm={searchTerm}
            handleSearch={handleSearch} />



        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Blog
