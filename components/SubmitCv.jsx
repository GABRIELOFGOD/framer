import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    className='bg-dark mx-auto items-center w-full text-center justify-center flex flex-col px-3 py-12 md:py-0 md:h-[400px]'>
        <h2 className='md:text-5xl text-[30px] md:leading-[4rem] text-primary pb-5'>Submit your CV and other Informations to get started</h2>
        <button className='rounded-[35px] bg-primary md:py-4 py-3 px-4 md:px-8 w-fit'><Link to='https://forms.zohopublic.com/revlabincorporation/form/SubmiyourCV/formperma/kBL9nlRbS2G9Z9Jm-g7Pob0BYnYb875mguwswZRl9dI'>Submit your CV</Link></button>
    </motion.div>
  )
}

export default SubmitCv