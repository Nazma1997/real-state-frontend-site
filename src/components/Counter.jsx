import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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
  const counter3 = (minimum, maximum) => {
    for (let i = minimum; i <= maximum; i++) {
      setTimeout(() => {
        setCount3(i);
      }, 1000);
    }
  };


  useEffect(() => {
    counter(0, 9500);
    counter1(0, 10000)
    counter2(0, 9000)
    counter3(0, 80000)
  }, []);
  return (
    <div className={`bg-[url('https://htmldemo.net/ortiz/ortiz/assets/images/bg/counter-bg.jpg')] h-52 lg:mt-32 md:mt-32 mt-24 mb-64 lg:max-w-7xl lg:mx-auto px-4 lg:px-8 md:mx-32 mx-24 `}>
     <div className=''>
     <div className=' grid lg:grid-cols-4 md:grid-cols-2  gap-4  '>
        <div>
          <h1 className='text-6xl font-bold text-sky-500'>{count}+</h1>
          <p className='ml-6 mt-3 text-xl text-sky-500'>Property Sale</p>
        </div>
        <div>
          <h1 className='text-6xl font-bold text-sky-500'>{count1}+</h1>
          <p className='ml-6 mt-3 text-xl text-sky-500'>Employee</p>
        </div>
        <div>
        <h1 className='text-6xl font-bold text-sky-500'>{count2}+</h1>
          <p className='ml-6 mt-3 text-xl text-sky-500'>Happy Clients</p>
        </div>
        <div>
        <h1 className='text-6xl font-bold text-sky-500'>{count3}+</h1>
          <p className='ml-6 mt-3 text-xl text-sky-500'>Property Available</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Counter
