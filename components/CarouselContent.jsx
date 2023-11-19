import React from 'react'

const CarouselContent = ({content}) => {
  return (
    <div className='kizz md:mx-5 py-6 max-w-[200px] w-full px-10 grid md:my-5 border-2 border-secondary md:text-[23px] capitalize  md:px-2 rounded-[20px] items-center md:flex md:flex-col justify-center mx-auto md:w-[205px] md:h-[189px]'>
        <img className='mx-auto pb-3' src={content.icon} alt="carousel-icon" />
        <span className='text-black text-center'>{content.text}</span>
    </div>
  )
}

export default CarouselContent