import React from 'react'

import { IoIosSettings } from 'react-icons/io'
import { SiStackbit } from 'react-icons/si'
import { BsStars } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import ChooseComp from './ChooseComp'

const Choose = () => {

    const content = [
        {
            icon: <SiStackbit />,
            topic: 'Tech Startup DNA',
            text: 'We\'ve been in the startup trenches, launching and scaling start-ups and so we  understand you, your goals and the qualities that make a tech start-up team thrive.'
        },
        {
            icon: <BsStars />,
            topic: 'Staffed by top search consultants.',
            text: 'Our seasoned recruiters offer tailored support to help you secure your ideal job, one that maximizes your strengths and propels your career.'
        },
        // {
        //     icon: <BiWorld />,
        //     topic: 'Experienced founders',
        //     text: 'Founded by seasoned recruiters and start-up entrepreneurs with experience building strong teams'
        // },
        {
            icon: <IoIosSettings />,
            topic: 'Technology Driven',
            text: 'We are enabled by technology and data to deliver unparalleled results in record time'
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
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={mainControl}
      transition={{ duration: 0.5, delay: 1 }}
    className='py-20 w-full px-16 md:px-28'>
        <h2 className='text-center font-bold text-3xl md:text-6xl'>Why Choose <span className='text-secondary'>Us</span>?</h2>
        <p className='text-textGray md:text-2xl text-center py-5'>At Revlab, we provide end-to-end recruitment solutions, covering roles from entry-level to C-suite</p>
        <div className='w-full justify-between md:flex md:flex-wrap'>
            <ChooseComp comp={content[0]} />
            <ChooseComp comp={content[1]} />
            <ChooseComp comp={content[2]} />
            {/* <ChooseComp comp={content[3]} /> */}
        </div>
    </motion.div>
  )
}

export default Choose