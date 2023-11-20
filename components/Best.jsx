import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Best = () => {
      
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
    className='md:flex md:py-24 w-full text-primary py-8 px-12 bg-dark md:px-52'>
        <div className='flex-1 md:w-[400px] w-[300px] mx-auto'>
            <img src="Images/Revlab cover design.png" className='md:mx-0 mx-auto w-full' alt="start-up" />
        </div>
        <div className="flex-1 md:mt-0 mt-5 my-auto">
            <h2 className=' md:test md:leading-[4.5rem] text-[30px] md:text-7xl '>What we do <span className="text-greenText">Best</span></h2>
            <p className='text-primary md:text-xl py-3 md:w-[550px] text-[12px] md:py-5 md:leading-8'>At Revlab, our seasoned search professionals leverage profound expertise, cutting-edge technology, and a database of 180k candidates to connect you with highly-sort-after candidates with a strong track-record of performance.</p>
        </div>
    </motion.div>
  )
}

export default Best