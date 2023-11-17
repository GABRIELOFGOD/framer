import React from 'react'
import DiscContent from './DiscContent'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Discript = () => {
   
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
    >
        <DiscContent />
    </motion.div>
  )
}

export default Discript