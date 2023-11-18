import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const ChooseComp = ({comp}) => {
     
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
    className='border-secondary md:w-[30%] flex gap-2 rounded-xl m-3 border-2 py-12 px-12'>
        <i className='text-3xl text-secondary'>{comp.icon}</i>
        <div>
            <h2 className='text-2xl pb-6'>{comp.topic}</h2>
            <p className='text-textGray text-lg'>{comp.text}</p>
        </div>
    </motion.div>
  )
}

export default ChooseComp