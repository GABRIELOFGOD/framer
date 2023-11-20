import React from 'react'
import FeatureComp from './FeatureComp'
import { MdPivotTableChart } from 'react-icons/md'
import { RiTableAltFill } from 'react-icons/ri'
import { GiProgression } from 'react-icons/gi'
import { PiNotepadFill } from 'react-icons/pi'
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const AboutFeature = () => {
    const feature = [
        {
            icon: <MdPivotTableChart />,
            text: 'Scalable hiring  solutions,  exclusively for startups.'
        },
        {
            icon: <RiTableAltFill />,
            text: 'Rapid hiring service to fill your open roles quickly.'
        },
        {
            icon: <PiNotepadFill />,
            text: 'One-off hires and longer term multi-hire projects.'
        },
        {
            icon: <GiProgression />,
            text: 'Fractional hires to develop strategy, build structure and create processes'
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
    className='md:py-16 py-6 md:px-40 mx-auto px-2 flex bg-dark'>
        <FeatureComp content={feature[0]} />
        <FeatureComp content={feature[1]} />
        <FeatureComp content={feature[2]} />
        <FeatureComp content={feature[3]} />
    </motion.div>
  )
}

export default AboutFeature