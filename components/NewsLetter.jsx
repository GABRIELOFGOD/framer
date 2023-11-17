import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const NewsLetter = () => {
  
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
    className='md:p-32 p-12 md:text-left text-center'>
        <div className='bg-secondary rounded-xl px-12 py-14 flex'>
            <div className='md:w-[70%] w-full'>
                <h2 className="text-5xl pb-4 text-primary">Join Our Newsletter</h2>
                <p className='text-primary leading-6 text-sm md:w-[70%]' >Stay ahead of the curve with our newsletter, where we share exclusive insights, industry news, and expert advice. Subscribe today and be part of our growing community of tech startup enthusiasts. </p>
                <form onSubmit={e => e.preventDefault()} className='md:flex gap-3 relative py-5 md:w-[70%]'>
                    <input type="text" className='rounded-[35px] py-4 my-2 w-full px-5 outline-none' placeholder='example@yourmail.com' />
                    <button className='p-4 md:my-auto md:h-fit bg-black md:w-fit w-full text-primary rounded-[35px]'>Subscribe</button>
                </form>
            </div>
            <img className='w-[300px] hidden md:flex' src="Images/mail with a frosted glass effect.png" alt="newsletter" />
        </div>
    </motion.div>
  )
}

export default NewsLetter