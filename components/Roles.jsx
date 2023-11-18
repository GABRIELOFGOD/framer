import React from 'react'
import RoleCard from './RoleCard'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Roles = () => {

    const contents = [
        {
            topic: 'Register your CV',
            text: 'Register your CV below. We review every registration and we\'ll get back to you within 48 hours.'
        },
        {
            topic: 'Invitation',
            text: 'If we think we can work together, we\'ll invite you to an initial video call. If not, we\'ll let you know why.'
        },
        {
            topic: 'Let\'s contact you',
            text: 'During the call, we\'ll explore your experience and ambitions to better understand if we can support you.'
        },
        {
            topic: 'The result',
            text: 'After the call, we\'ll let you know if we can support your job search. If we can\'t, we\'ll let you know why.'
        },
        {
            topic: 'Your oppourtuinities',
            text: 'We\'ll then search for opportunities on your behalf, make intro\'s to our clients and secure your next job.'
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
    className='flex py-32 px-52 gap-6'>
        <div className='flex-1'>
            <p className='text-secondary'>ROLES WE PLACE</p>
            <h2 className=' test leading-[4.5rem] text-6xl '>How we'll work together</h2>
            <p className='text-textGray text-xl w-[82%] pt-6 leading-8'>With hundreds of candidates registering with us each week, our 1:1 approach means we can't work with everyone. Here's what you can expect from us;</p>
            <img className='w-[400px]' src="Images/qqqq.png" alt="block-image" />
            <h5 className=' text-xl w-[82%] pt-6 leading-8'>Please don't be offended if we don't feel we can support you. We only work with approximately 5% of candidates who register with us.</h5>
        </div>
        <div className='flex-1'>
            <RoleCard details={contents[0]} />
            <RoleCard details={contents[1]} />
            <RoleCard details={contents[2]} />
            <RoleCard details={contents[3]} />
            <RoleCard details={contents[4]} />
        </div>
    </motion.div>
  )
}

export default Roles