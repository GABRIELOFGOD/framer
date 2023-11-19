import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { FaRegUser } from 'react-icons/fa'

const TestimonyCard = ({content}) => {
      
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
 
    className='md:w-1/2 border pb-20 relative mb-6 mx-3 border-gray-200 py-8 px-6 rounded-[20px]'>
        <p className='leading-7 text-sm'>{content.testimony}</p>
        <div className='flex gap-3 bottom-6 absolute pt-12 my-auto'>
            {content.icon ? <div className=" h-[50px] w-[50px] border border-secondary rounded-full"><img src={content.icon} alt="Team-picture" /></div> : <FaRegUser /> }
            <div className='text-xs my-auto'>
                <p className=''>{content.name}</p>
                <p className='text-secondary'>{content.position}</p>
            </div>
        </div>
    </motion.div>
  )
}

export default TestimonyCard