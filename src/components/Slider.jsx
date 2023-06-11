import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CardData = () => {
  const rtn = [{
    name:'Lora Momen Smith',
    title: "CEO, Square Groups",
    desc: <p>Ortiz is one of the most popular real estate company all around USA. <br /> You can find your dream property or build property with us.<br /> We always provide importance to our customer.</p>,
    short:<p>Ortiz is one of the most popular real estate company all around USA. </p>,
    url: "https://htmldemo.net/ortiz/ortiz/assets/images/testimonial/outher-01.jpg"
  }, {
    name:'Morgi Kabir',
    title: "CEO, Square Groups",
    desc: <p>Ortiz is one of the most popular real estate company all around USA. <br /> You can find your dream property or build property with us.<br /> We always provide importance to our customer.</p>,
    url: "https://htmldemo.net/ortiz/ortiz/assets/images/testimonial/outher-02.jpg"
  },
  {
    name:'Motku Kabir',
    title: "CEO, Square Groups",
    desc: <p>Ortiz is one of the most popular real estate company all around USA. <br /> You can find your dream property or build property with us.<br /> We always provide importance to our customer.</p>,
    url: "https://htmldemo.net/ortiz/ortiz/assets/images/testimonial/outher-02.jpg"
  }];
  return rtn;
};

const Cards = ({ cardStyle }) => {
  const cardData = CardData();
  return (
    <section>
      {cardData.map((card, i) => (
        <div className="card" id="card" style={cardStyle} key={i}>
         
          <img src={card?.url} alt='the' className='ml-24 lg:w-52 md:44' />
          <div className=' lg:h-80 md:h-80 h-96 -mt-28 shadow-lg border-2 '>
            <p className="text-center   text-xl font-bold lg:mt-10 md:mt-10 mt-32">{card?.name}</p>
            <p className="text-center text-lg font-semibold">{card?.title}</p>
            <p className='mt-10 mx-10 text-lg text-semibold max-w-fit content-hide lg:text-center	'>{card?.desc}</p>
            <p className='mt-10 mx-10 text-lg text-semibold max-w-fit content-show  lg:text-center	'>{card?.short}</p>
            
          </div>
        </div>
      ))}
    </section>
  );
};

const Display = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [position, setPosition] = useState(0);
  const [cardStyle, setCardStyle] = useState({ transform: 'translateX(0px)' });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const boxWidth = document.getElementById("card").clientWidth;
    setWidth(boxWidth);
  }, []);

  const handleClick = (type) => {
    let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
    margin = JSON.parse(margin.replace(/px/i, ''));

    const cardWidth = width;
    const cardMargin = margin;
    const cardNumber = CardData().length;
    let newCurrentCard = currentCard;
    let newPosition = position;

    if (type === 'next' && currentCard < cardNumber - 1) {
      newCurrentCard++;
      newPosition -= (cardWidth + cardMargin);
    } else if (type === 'prev' && currentCard > 0) {
      newCurrentCard--;
      newPosition += (cardWidth + cardMargin);
    }

    setCard(newCurrentCard, newPosition);
  };

  const setCard = (newCurrentCard, newPosition) => {
    setCurrentCard(newCurrentCard);
    setPosition(newPosition);
    setCardStyle({
      transform: `translateX(${newPosition}px)`
    });
  };

  return (
    <div className="cards-slider">
      <div className="slider-btns">
        <button className="slider-btn btn-l text-sky-500 text-2xl" onClick={() => handleClick('prev')}><AiOutlineArrowLeft /></button>
        <button className="slider-btn btn-r text-sky-500 text-2xl " onClick={() => handleClick('next')}><AiOutlineArrowRight/></button>
      </div>
      <Cards cardStyle={cardStyle} />
    </div>
  );
};

export default Display;
