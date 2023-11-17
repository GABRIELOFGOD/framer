import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const FeatureComp = ({content}) => {
     
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
    className='px-8 py-8 mx-3 rounded-xl w-[300px] bg-[#101828]'>
        {/* <div className='text-3xl mb-3 text-secondary p-3 bg-dark w-fit rounded-full'>{content.icon}</div> */}
        <b className='text-primary leading-6 font-light text-[22px]'>{content.text}</b>
    </motion.div>
  )
}

export default FeatureComp