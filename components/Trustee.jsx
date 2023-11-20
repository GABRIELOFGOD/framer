import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Trustee = () => {
      
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

    className='md:flex md:gap-5 bg-dark py-10 px-10 md:py-32 md:px-52'>
        <div className="flex-1">
            <img className='md:w-[450px] w-full' src="Images/glass.png" alt="Trustee-Image" />
        </div>
        <div className="flex-1 md:py-0 py-4 my-auto text-primary">
            <h2 className='md:text-7xl text-[30px]'>Consented data on <span className="text-greenText">180,000 +</span> candidates</h2>
            <p className='md:text-xl text-[12px] md:pt-20'>We want to cut the time it takes to make an exceptional hire without compromising on Talent quality.</p>
        </div>
    </motion.div>
  )
}

export default Trustee