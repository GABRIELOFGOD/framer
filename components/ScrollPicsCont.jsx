import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ScrollPicsCont = () => {
     
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
    >
      <div className='flex image mb-20 overflow-scroll'>
        <img src="Images/Frame 10.png" alt="" />
        <img src="Images/Frame 11.png" alt="" />
        <img src="Images/Frame 12.png" alt="" />
        <img src="Images/Frame 13.png" alt="" />
        <img src="Images/Frame 59.png" alt="" />
        <img src="Images/Frame 60.png" alt="" />
        <img src="Images/Frame 61.png" alt="" />
      </div>
      <div className='flex image overflow-scroll'>
        <img src="Images/Frame 10.png" alt="" />
        <img src="Images/Frame 11.png" alt="" />
        <img src="Images/Frame 12.png" alt="" />
        <img src="Images/Frame 13.png" alt="" />
        <img src="Images/Frame 59.png" alt="" />
        <img src="Images/Frame 60.png" alt="" />
        <img src="Images/Frame 61.png" alt="" />
      </div>
    </motion.div>
  )
}

export default ScrollPicsCont