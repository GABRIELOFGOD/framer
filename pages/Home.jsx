import Rocket from '../components/Rocket'
import Discript from '../components/Discript'
import Choose from '../components/Choose'
import Talents from '../components/Talents'
import ScrollPics from '../components/ScrollPics'
import NewsLetter from '../components/NewsLetter'
import Carousel from '../components/Carousel'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Logos from '../components/Logos'
import { baseUrl } from '../context/serverCall'
import Love from '../components/Love'
import { Link } from 'react-router-dom'

const Home = () => {
  
  // const ref = useRef(null)

  // const inView = useInView(ref, { once: true })

  // const mainControl = useAnimation()

  // useEffect(() => {
  //   if(inView) {
  //     mainControl.start('visible')
  //   }
  // }, [inView])

  return (
    <motion.div
      // ref={ref}
      // variants={{
      //   hidden: { opacity: 0.3, y: 75 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial='hidden'
      // animate={mainControl}
      // transition={{ duration: 0.5, delay: 1 }}
    >
      <div className='w-full pb-2 md:pb-12 md:pt-28 py-8 px-12 md:px-48'>
        {/* =============== HEROE SECTION ====================== */}
        <h2 className='md:w-[800px] text-center md:text-left text-[32px] font-[500] md:font-normal md:test md:leading-[5rem] md:text-7xl '>
          We <span className='text-secondary'>build the Teams</span> behind Africa's most promising <span className='text-secondary'>Start-ups</span>
        </h2>
        <div className='md:flex justify-between'>
          <div className='md:text-left text-center mx-auto md:mx-0'>
            <p className='md:text-textGray text-[12px] md:text-xl md:w-[500px] py-5'>We connect ambitious talent with high growth, VC backed, startups and scale-ups.</p>
            <button className='bg-secondary rounded-full h-fit my-auto md:text-[15px] md:py-4 text-xs py-2 text-primary px-4 md:px-8'><Link to='https://calendly.com/samuels-revlab/30min'>Book a call</Link></button>
          </div>
          <div className="md:w-[450px] w-full md:flex md:h-[450px] md:mt-[-100px] md:mr-[-80px]">
            <img src='Images/baba.png' className='md:h-full h-fit w-full' alt="group image" />  
          </div>
        </div>

      </div>

        {/* ================== LOGO CAROUSEL ================= */}
        <Logos />

        {/* ================== ROCKET SECTION ================ */}
        <Rocket />

        {/* ================== FEATURE SECTION ================ */}
        <Discript />

        {/* ================== COROUSEL IMAGE SLIDER ========== */}
        <Carousel />

        {/* ================== WHY CHOOSE SECTION ================ */}
        <Choose />

        {/* ================== TALENTS SECTION ================ */}
        <Talents />

        {/* ================== TALENTS SECTION ================ */}
        {/* <ScrollPics /> */}

        <Love />

        {/* ================== TALENTS SECTION ================ */}
        <NewsLetter />
    </motion.div>
  )
}

export default Home