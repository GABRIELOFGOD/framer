import React from 'react'
import BenefitCard from './BenefitCard'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Benefits = () => {

    const benefits = [
        {
            icon: 'Images/Revlabs illustrationaa.png',
            topic: 'PEACE OF MIND',
            text: 'Let your new executive handle their department so you can focus on growth'
        },
        {
            icon: 'Images/100+.png',
            topic: '100+ EXECUTIVES',
            text: 'Get matched to some of the vetted executives in our fast-growing community.'
        },
        {
            icon: 'Images/25.png',
            topic: '25+ INDUSTRIES AND GROWING',
            text: 'Revlab\'s executives work across SaaS, FinTech, HealthTech, Ecommerce, Mobility, and more.'
        },
        {
            icon: 'Images/ex.png',
            topic: 'EXPERIENCE COUNTS',
            text: 'Over 50% of our executives have 15+ years of experience'
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
    className='md:px-42 px-12 py-6 md:py-12'>
        <div className='w-full text-center'>
            <p className=' font-bold text-sm text-textGray'>OUR BENEFITS</p>
            <h2 className='text-dark md:fuller w-full py-3 text-[30px] md:py-8 md:text-7xl'>Hire <span className="text-secondary">right</span>, Hire <span className="text-secondary">fast</span></h2>
            <p className='text-textGray md:text-md text-[12px] '>With Revlab, you can find and hire a C-level executive in weeks, not months at a fraction of the cost</p>
        </div>
        <div className='md:grid gap-5 mx-auto md:grid-cols-2 justify-around w-full md:px-48 md:py-24'>
            <BenefitCard content={benefits[0]} />
            <BenefitCard content={benefits[1]} />
            <BenefitCard content={benefits[2]} />
            <BenefitCard content={benefits[3]} />
        </div>
    </motion.div>
  )
}

export default Benefits