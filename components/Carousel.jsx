import React from 'react'
import CarouselContent from './CarouselContent'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Carousel = () => {

    const content = [
        {
        icon: 'Images/Iconoir-4.png',
          text: 'operations'
        },
        {
          icon: 'Images/Iconoir-3.png',
          text: 'partnership'
        },
        {
          icon: 'Images/Iconoir-7.png',
          text: 'sales'
        },
        {
          icon: 'Images/Iconoir-6.png',
          text: 'customer success'
        },
        {
          icon: 'Images/Iconoir-2.png',
          text: 'product'
        },
        {
          icon: 'Images/Feather.png',
          text: 'design'
        },
        {
            icon: 'Images/Iconoir-5.png',
            text: 'engineering'
        },
        {
            icon: 'Images/Iconoir-8.png',
            text: 'marketing'
        }
    ]
    
  const ref = useRef(null)

  const inView = useInView(ref, { once: true })

  const mainControl = useAnimation()

  useEffect(() => {
    if(inView) {
      mainControl.start('visible')
    }
  }, [inView])
  return (
    <motion.div
    ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControl}
      transition={{ duration: 0.5, delay: 1 }}
    className='overflow-x-hidden mx-auto justify-around w-full md:px-[200px] md:py-24 '>
        <div className='flex flex-wrap w-full '>
            <CarouselContent content={content[0]} />
            <CarouselContent content={content[1]} />
            <CarouselContent content={content[2]} />
            <CarouselContent content={content[3]} />
            <CarouselContent content={content[4]} />
            <CarouselContent content={content[5]} />
            <CarouselContent content={content[6]} />
            <CarouselContent content={content[7]} />
        </div>
        {/* <div className=' w-fit gap-4 caro'>
            <CarouselContent content={content[0]} />
            <CarouselContent content={content[1]} />
            <CarouselContent content={content[2]} />
            <CarouselContent content={content[3]} />
            <CarouselContent content={content[4]} />
            <CarouselContent content={content[5]} />
            <CarouselContent content={content[6]} />
            <CarouselContent content={content[7]} />
        </div> */}
    </motion.div>
  )
}

export default Carousel