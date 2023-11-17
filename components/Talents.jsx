import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Talents = () => {
  
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
    className='flex flex-row-reverse mx-auto bg-dark py-24 px-32'>
        <div className='flex-1 my-auto'>
            <img src="Images/cup.png" className='mx-auto' alt="start-up" />
        </div>
        <div className='flex-1'>
            <h2 className='w-[650px] leading-[4.5rem] text-primary text-6xl '>Hire the best <span className='text-greenText'>Talents </span>for your Start-up Teams</h2>
            <p className='w-[510px] leading-[2rem] text-[19px] text-primary py-5'>In the ever-evolving landscape of technology startups, one thing remains constant: the need for exceptional talent. At Revlab, we're here to connect visionaries with the leaders who can turn those visions into reality.</p>
            <button className='bg-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 text-primary px-8'>Get in touch</button>
        </div>
    </motion.div>
  )
}

export default Talents