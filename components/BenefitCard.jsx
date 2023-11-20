import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const BenefitCard = ({content}) => {
    
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
    className='md:h-[100px] md:my-0 my-3 overflow-hidden flex rounded-[20px] popi border-2 border-gray-200 w-full'>
        <div className="md:w-[100px] w-[80px] my-auto"><img className='w-full ' src={content.icon} alt="benefit-Image" /></div>
        <div className='p-3 text-xs my-auto w-[70%]'>
            <p className='pb-3 font-bold text-black'>{content.topic}</p>
            <p className='text-textGray text-[12px] md:text-md font-[700]'>{content.text}</p>
        </div>
    </motion.div>
  )
}

export default BenefitCard