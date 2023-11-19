import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { baseUrl } from '../context/serverCall'

const Rocket = () => {
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
      className='md:flex mx-auto bg-dark py-12 px-10 md:py-44 md:px-24'>
        <div className='flex-1 w-full'>
            <img src='Images/star.png' className='mx-auto w-full md:w-[350px]' alt="start-up" />
        </div>
        <div className='flex-1'>
            <h2 className='md:w-[500px] w-full md:leading-[4.5rem] py-5 text-primary text-[30px] md:text-6xl '>Only for people who want to work in <span className='text-greenText'>Startups</span></h2>
            <p className='md:w-[510px] leading-[2rem] text-[12px] font-light text-primary '>We're passionate about startups and so if you're looking for your next job and want to join a high growth company, this is the place for you.</p>
        </div>
    </motion.div>
  )
}

export default Rocket