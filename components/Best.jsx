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
    className='flex py-24 text-primary bg-dark px-52'>
        <div className='flex-1'>
            <img src="Images/Revlab cover design.png" className=' w-[400px]' alt="start-up" />
        </div>
        <div className="flex-1 my-auto">
            <h2 className=' test leading-[4.5rem] text-7xl '>What we do <span className="text-greenText">Best</span></h2>
            <p className='text-primary text-xl w-[550px] py-5 leading-8'>At Revlab, our seasoned search professionals leverage profound expertise, cutting-edge technology, and a database of 180k candidates to facilitate impactful hires swiftly.</p>
        </div>
    </motion.div>
  )
}

export default Best