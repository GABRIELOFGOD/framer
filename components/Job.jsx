import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Job = () => {
    
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
    className='md:flex px-12 py-6 md:gap-10 md:py-32 md:px-48'>
        <div className='md:jug relative  flex-1'>
            <div className='md:img1 hidden md:flex md:sames'><img src="Images/medium-shot-smiley-graduate-student.jpg" alt="graduate-image" /></div>
            <div className='md:img2 w-full md:sames'><img src="Images/Untitled-1.jpg" alt="graduate-image" /></div>
            <div className='md:img3 hidden md:flex md:sames'><img src="Images/young-woman-sitting-staircase-using-laptop-computer-female-working-laptop-outdoor.jpg" alt="graduate-image" /></div>
        </div>
        <div className='flex-1'>
            <h2 className='py-3 md:py-0 md:test md:w-[400px] text-[30px] md:leading-[5rem] md:text-7xl '>
                Jobs at all levels, from <span className='text-secondary'>Graduate</span> to <span className='text-secondary'>C-Level</span>
            </h2>
        </div>
    </motion.div>
  )
}

export default Job