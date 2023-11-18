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
      className='flex mx-auto bg-dark py-44 px-24'>
        <div className='flex-1'>
            <img src='Images/star.png' className='mx-auto w-[350px]' alt="start-up" />
        </div>
        <div className='flex-1'>
            <h2 className='w-[500px] leading-[4.5rem] text-primary text-6xl '>Only for people who want to work in <span className='text-greenText'>Startups</span></h2>
            <p className='w-[510px] leading-[2rem] text-[20px] font-light text-primary py-5'>We're passionate about startups and so if you're looking for your next job and want to join a high growth company, this is the place for you.</p>
        </div>
    </motion.div>
  )
}

export default Rocket