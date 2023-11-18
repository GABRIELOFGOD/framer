import React from 'react'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { baseUrl } from '../context/serverCall'
import { Link } from 'react-router-dom'

const DiscContent = () => {
     
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
        <motion.div
      ref={ref}
        variants={{
          hidden: { opacity: 0.3, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControl}
        transition={{ duration: 0.5, delay: 1 }}
        className='mx-auto flex md:flex-row flex-col-reverse box-border h-[600px]' id='executive'>
            <div className='flex-1 flex flex-col w-fit text-left h-full md:py-20'>
                <div className="md:mx-auto px-8 py-6">
                    <h2 className='md:text-7xl font-extrabold md:font-normal text-4xl text-left md:leading-[5rem] md:w-[300px]'>Executive <span className='text-secondary'>Search</span></h2>
                    <p className='text-textGray leading-5 py-3 md:py-5 md:text-lg md:font-light md:w-[400px]'>Finding visionary leaders who will steer your startup toward success. We identify, vet, and place top-tier executives who align with your company's mission and culture. </p>
                    <button className='bg-secondary w-fit rounded-full h-fit my-auto md:py-3 py-4 px-4 text-primary md:px-8'><Link to='https://calendly.com/samuels-revlab/30min'>Book a call</Link></button>
                </div>
            </div>
            <div className='md:flex-1 disc w-full h-[350px] md:h-full'>
                <img className='scale-[1.5]' src='Images/african-american-business-man-reading-news-talking-phone.jpg' />
            </div>
        </motion.div>
        <motion.div
      ref={ref}
        variants={{
          hidden: { opacity: 0.3, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControl}
        transition={{ duration: 0.5, delay: 1 }} 
        className='mx-auto flex md:flex-row-reverse flex-col-reverse box-border h-[600px]' id='talent'>
            <div className='flex-1 flex flex-col w-fit text-left h-full md:py-20'>
                <div className="md:mx-auto px-8 py-6">
                    <h2 className='md:text-7xl font-extrabold md:font-normal text-4xl text-left md:leading-[5rem] w-[300px]'>Technical <span className='text-secondary'>Talent </span>Acquisition</h2>
                    <p className='text-textGray leading-5 py-3 md:py-5 md:text-lg md:font-light md:w-[400px]'>Building high-performing technical teams is our specialty. We source and recruit top engineering, development, and technical talent to drive your product innovation.</p>
                    {/* <button className='bg-secondary w-fit rounded-full h-fit my-auto text-[12px] md:py-3 py-2 px-4 text-primary md:px-8'>Book a call</button> */}
                </div>
            </div>
            <div className='md:flex-1 ahh disc1 w-full h-[450px] md:h-full'>
                <img className='scale-[1] top-[-200px] md:top-[-250px]' src='Images/woman-keeps-stylus-temple-uses-graphic-tablet-painting-works-with-digital-touch-pad-application-poses-street-downton-against-city-skyscraper-develops-new-design (1).jpg' />
            </div>
        </motion.div>
        <motion.div
      ref={ref}
        variants={{
          hidden: { opacity: 0.3, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={mainControl}
        transition={{ duration: 0.5, delay: 1 }} 
        className='mx-auto flex md:flex-row flex-col-reverse box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full md:py-20'>
                <div className="md:mx-auto px-8 py-6">
                    <h2 className='md:text-7xl font-[950] md:font-normal text-4xl text-left md:leading-[5rem] md:w-[400px]'>Fraction by <span className='text-secondary'>Revlab</span></h2>
                    <p className='text-textGray leading-5 py-3 md:py-5 md:text-lg md:font-light md:w-[400px]'>Access the talents you need to drive strategy, structure your teams, and scale operations without the burden of a full compensation package</p>
                    <button className='bg-secondary w-fit rounded-full h-fit my-auto md:py-3 py-2 px-4 text-primary md:px-8'><Link to='/fraction'>Learn more</Link></button>
                </div>
            </div>
            <div className='md:flex-1 ehh md:right-[0] w-full h-[350px] md:h-full'>
                <img className='scale-[1.2]' src='Images/workers-giving-ideas-new-project.jpg' alt="disc image" />
            </div>
        </motion.div>
        {/* <div className='mx-auto flex flex-row-reverse box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full py-20'>
                <div className="mx-auto pl-10">
                    <h2 className='text-7xl text-left leading-[5rem] w-[600px]'>Technical <span className='text-secondary'>Talent </span>Acquisition</h2>
                    <p className='text-textGray font-light py-5 text-lg w-[400px]'>Building high-performing technical teams is our specialty. We source and recruit top engineering, development, and technical talent to drive your product innovation.  </p>
                </div>
            </div>
            <div className='flex-1 ahh w-full h-full'>
                <img className='w-full' src="Images/woman-keeps-stylus-temple-uses-graphic-tablet-painting-works-with-digital-touch-pad-application-poses-street-downton-against-city-skyscraper-develops-new-design (1).jpg" alt="disc image" />
            </div>
        </div>
        <div className='mx-auto flex box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full py-20'>
                <div className="mx-auto">
                    <h2 className='text-7xl text-left leading-[4rem] w-[400px]'>Fractional by <span className='text-secondary'>Revlab</span></h2>
                    <p className='text-textGray font-light py-5 text-lg w-[400px]'>Access the talents you need to drive strategy, structure your teams, and scale operations without the burden of a full compensation package</p>
                    <div className='flex gap-8'>
                        <button className='bg-secondary w-fit rounded-full h-fit my-auto text-[12px] py-3 text-primary px-8'>Learn more</button>
                        
                    </div>
                </div>
            </div>
            <div className='flex-1 ehh'>
                <img className='' src="Images/workers-giving-ideas-new-project.jpg" alt="disc image" />
            </div>
        </div> */}
    </motion.div>
  )
}

export default DiscContent