import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const SubmitCv = () => {
     
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
    className='bg-dark mx-auto items-center text-center justify-center flex flex-col h-[400px]'>
        <h2 className='text-5xl leading-[4rem] text-primary pb-5 w-[900px]'>Submit your CV and other Informations to get started</h2>
        <button className='rounded-[35px] bg-primary py-4 px-8 w-fit'>Submit your CV</button>
    </motion.div>
  )
}

export default SubmitCv