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
    className='md:p-8 mx-1 md:mx-3 my-2 rounded-xl p-4 md:w-[300px] bg-[#101828]'>
        {/* <div className='text-3xl mb-3 text-secondary p-3 bg-dark w-fit rounded-full'>{content.icon}</div> */}
        <b className='text-primary md:leading-6 leading-3 text-[12px] font-light md:text-[22px]'>{content.text}</b>
    </motion.div>
  )
}

export default FeatureComp