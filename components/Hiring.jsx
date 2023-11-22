import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import RoleCard from './RoleCard'

const Hiring = () => {

    const contents = [
        {
            topic: 'Expensive',
            text: 'Top executives cost companies $100k to $500k to have on their team, making it especially hard for startups to attract the candidates they need.',
            link: 'Start today'
        },
        {
            topic: 'Hard to Find',
            text: 'Companies worldwide spend billions of dollars every year on executive searches, while most startups are forced to limit their search to their current network.'
        },
        {
            topic: 'Essential',
            text: 'Founders feel the burden of forgoing experienced executives in order to save costs, leading to more problems and expenses down the line.',
            link: 'Hire Executives'
        }
    ]

    const content = [
        {
            topic: 'Tell us what you are looking for',
            text: 'Craft and share a job post with your requirements and preferences. we\'ll make sure we match you to the right executives',
            link: 'Start today'
        },
        {
            topic: 'Get 5 hand-picked profiles and pitches',
            text: 'Revlab matches 5 ideal executives to you within 48 hours. View the candidates\' profiles and job-specific pitches before scheduling interviews'
        },
        {
            topic: 'Hire and onboard with ease',
            text: 'Revlab streamlines the process from start to finish, including contract signing, invoicing, and payments etc',
            link: 'Hire Executives'
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
    >
        <div className='md:flex md:px-52 px-12 py-10 md:gap-10 md:py-20'>
            <div className="flex-1">
                <p className='text-secondary font-bold text-sm'>THE PROBLEM</p>
                <h2 className=' md:test md:leading-[5rem] md:text-7xl text-[30px] leading-8 py-3 md:py-6 '>Hiring a Top Executive is <div className="span text-secondary">Tough</div></h2>
                <p className='text-textGray text-[12px] md:text-md md:leading-7 md:w-[350px]'>Founders spend too much time and money to hire key executives, often needing to replace them in a couple of years anyway.</p>
                <img loading='lazy' className='full mx-auto my-10 md:my-3' src="Images/illustration.png" alt="Illustration-Image" />
            </div>
            <div className="flex-1">
                <RoleCard details={contents[0]} />
                <RoleCard details={contents[1]} />
                <RoleCard details={contents[2]} />
            </div>
        </div>
        <div className='md:flex relative flex-row-reverse px-12 md:px-52 md:gap-[100px] py-10 md:py-20'>
            <div className=" md:w-[500px] flex md:mr-[-50px] flex-col md:right-3">
                <p className='text-secondary font-bold text-sm'>THE SOLUTION</p>
                <h2 className=' md:test md:leading-[5rem] md:w-[400px] md:text-7xl text-[30px] py-3 md:py-6 '>How <span className="text-secondary">Fraction</span> works?</h2>
                <p className='text-textGray text-[12px] md:text-md md:leading-7 md:w-[350px]'>Use Revlab’s marketplace of vetted fractional executives.</p>
                <img className='full mt-12' src="Images/Revlabs illustrationaaaa.png" alt="Illustration-Image" />
            </div>
            <div className=" md:w-[700px]">
                <p className="text-textGray py-4">STEP 1: CREATE A JOB POST</p>
                <RoleCard details={content[0]} />
                <p className="text-textGray py-4">STEP 2: INTERVIEW AND CHOOSE</p>
                <RoleCard details={content[1]} />
                <p className="text-textGray py-4">STEP 3: HIRE YOUR NEW EXECUTIVES</p>
                <RoleCard details={content[2]} />
            </div>
        </div>
    </motion.div>
  )
}

export default Hiring