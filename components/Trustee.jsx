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

    className='flex gap-5 bg-dark py-32 px-52'>
        <div className="flex-1">
            <img className='w-[450px]' src="Images/glass.png" alt="Trustee-Image" />
        </div>
        <div className="flex-1 my-auto text-primary">
            <h2 className='text-7xl'>Consented data on <span className="text-greenText">180,000 +</span> candidates</h2>
            <p className='text-xl pt-20'>We want to cut the time it takes to make an exceptional hire without compromising on Talent quality</p>
        </div>
    </motion.div>
  )
}

export default Trustee