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
    className='flex py-24 relative px-52'>
        <div className='flex-1 my-auto w-1/2'>
            <h2 className=' test w-[600px] leading-[5rem] text-8xl '>Hire <span className="text-secondary">with</span> Confidence</h2>
            <p className='text-textGray w-[400px] text-2xl py-5'>Our veteran search professionals have deep expertise supercharged with access to data on 180k candidates allowing us make impactful hires, faster.</p>
        </div>
        <div className="flex-1 w-1/2 absolute bottom-0 right-8">
            <img className='w-[90%]' src="Images/c55.jpg" alt="Hiring-image" />
        </div>
    </motion.div>
  )
}

export default Hire