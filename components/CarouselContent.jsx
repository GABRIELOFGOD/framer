import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const CarouselContent = ({content}) => {
  return (
    <div className='kizz border-2 border-secondary text-[23px] capitalize px-2 rounded-[20px] items-center flex flex-col justify-center my-1 m-auto w-[205px] h-[189px]'>
        <img className='mx-auto pb-3' src={content.icon} alt="carousel-icon" />
        <span className='text-black text-center'>{content.text}</span>
    </div>
  )
}

export default CarouselContent