import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Recruit = () => {
      
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
        <div className='h-[90vh] w-full toper text-center pt-[200px] pl-[300px] relative overflow-hidden'>
            
        </div>
        <div className='h-[90vh] w-full topper text-center pt-[200px] pl-[300px] relative overflow-hidden'>
            
        </div>
    </motion.div>
  )
}

export default Recruit