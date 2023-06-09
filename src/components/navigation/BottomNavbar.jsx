import React from 'react'

const BottomNavbar = ({text}) => {
  return (
    <div className={`bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/bg/breadcrumb.jpg')] h-44`}>
    
        <h1 className='items-stretch pt-20 text-center text-white text-2xl font-bold	'>Home - {text}</h1>
     
      
    </div>
  )
}

export default BottomNavbar
