import React from 'react'

const CarouselContent = ({content}) => {
  return (
    <div className='kizz md:mx-5 my-5 border-2 border-secondary text-[23px] capitalize px-2 rounded-[20px] items-center flex flex-col justify-center mx-auto w-[205px] h-[189px]'>
        <img className='mx-auto pb-3' src={content.icon} alt="carousel-icon" />
        <span className='text-black text-center'>{content.text}</span>
    </div>
  )
}

export default CarouselContent