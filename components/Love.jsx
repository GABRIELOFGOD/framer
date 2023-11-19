import React from 'react'
import TestimonyCard from './TestimonyCard'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Love = () => {

    const testimonies = [
        {
            name: 'Uchenna Michael',
            icon: 'Images/Team picture-1.png',
            position: 'VP, Partnerships, ThankUCash',
            testimony: 'The search consultants at Revlab understood my needs, worked closely with me to develop our hiring strategy blue print and successful filled every role on time as promised.'
        },
        {
            name: 'Samuel Eze',
            icon: 'Images/Team picture.png',
            position: 'Executive Director, Dee-Jone Oil and Gas',
            testimony: 'To expand our tech team, we turned to Revlab. They acted swiftly, grasped our requirements, and provided candidates who not only understood the job but were also deeply committed and passionate about our mission. Now, Revlab manages all our recruitment needs at Dee-Jones.'
        }
    ]
    
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
    className='md:py-20 py-8 px-8 md:px-[300px]'>
        <div className="text-center">
            <p className='text-secondary text-sm font-bold'>CLIENTS REVIEW</p>
            <h2 className='md:text-4xl text-[30px] py-4 md:py-8'>What our clients say.</h2>
        </div>
        <div className='md:flex mx-auto w-full md:justify-between'>
            <TestimonyCard content={testimonies[0]} />
            <TestimonyCard content={testimonies[1]} />
        </div>
    </motion.div>
  )
}

export default Love