import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Card = () => {
      
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
    className='m-auto md:pt-20 pt-10 px-8 md:px-[310px] justify-center'>
        <div className="grid gap-7 mb-6 grid-cols-2">
            <div className="flex-1 text-[30px] py-6 border-2 h-fit w-fit md:text-5xl font-[500] md:py-10 md:leading-[4.5rem] rounded-2xl px-6 md:rounded-[65px] border-secondary"><h2>Meet the <span className="text-secondary">Best recruiters</span> you'll ever work with</h2></div>
            <img className='flex-1 my-auto w-[350px]' src="Images/Revlabs illustration.png" alt="card-image" />
        </div>
        <div className="flex-1 border-2 h-fit w-fit py-8 md:py-10 text-center px-6 md:px-12 rounded-2xl md:rounded-[65px] border-secondary">
            <h2 className=' text-[30px] md:text-5xl font-[500]'>Your <span className="text-secondary">Startup job</span> and <span className="text-secondary">Search</span> partner</h2>
            <p className="text-textGray  md:pt-7 pt-5 text-left text-[12px] md:text-lg">We work with the best talent at every level so if you’re looking for your next job and want to join a high growth startup, we’ll ensure you have the best chance of getting hired.</p>
        </div>
    </motion.div>
  )
}

export default Card