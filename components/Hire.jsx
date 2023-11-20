import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Hire = () => {
      
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
        hidden: { opacity: 0.3, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControl}
      transition={{ duration: 0.5, delay: 1 }}
    className='md:flex md:py-24 py-8 pb-0 px-12 relative md:px-52'>
        <div className='flex-1 my-auto md:w-1/2'>
            <h2 className=' md:test md:w-[600px] md:leading-[5rem] text-[30px] md:text-8xl '>Hire <span className="text-secondary">with</span> Confidence</h2>
            <p className='text-textGray md:w-[400px] md:text-2xl text-[12px] md:py-5 py-3'>Our veteran search professionals have deep expertise supercharged with access to data on 180k candidates allowing us make impactful hires, faster.</p>
        </div>
        <div className="flex-1 md:w-1/2 md:absolute md:bottom-0 md:right-8">
            <img className='md:w-[90%]' src="Images/c55.jpg" alt="Hiring-image" />
        </div>
    </motion.div>
  )
}

export default Hire