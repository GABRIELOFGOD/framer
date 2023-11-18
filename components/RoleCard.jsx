import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

const RoleCard = ({details}) => {
      
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
    className='p-10 w-full mb-5 border border-secondary kizz2 rounded-[25px]'>
        <h2 className='text-xl pb-4'>{details.topic}</h2>
        <p className='text-textGray pr-14'>{details.text}</p>
        {details.link && <p className="text-secondary font-bold py-3 flex my-auto gap-2"><Link to='/contact'>{details.link}</Link><IoMdArrowForward className='font-bold text-xl my-auto' /></p>}
    </motion.div>
  )
}

export default RoleCard