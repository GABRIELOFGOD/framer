import React from 'react'
import createGlobe from "cobe";
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

const Globe = () => {
    const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500 * 2,
      height: 500 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0.6, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
        })
    })

      
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
    className='md:flex px-12 w-full py-10 bg-black md:py-24 md:px-32'>
        <div className="md:w-2/3">
            <h2 className='text-5xl text-primary'>Sectors we <span className="text-secondary">Cover</span></h2>
            <div className='woo md:py-0 py-5 w-full md:split'>
                <img src="Images/nnnnn.png"  alt="globe-marketing icon" />
                <img src="Images/Frame 354.png" alt="globe-marketing icon" />
            </div>
        </div>
        <div className="md:w-[45%] items-start">
          <canvas
              ref={canvasRef}
              style={{ width: 300, height: 300, maxWidth: "100%", aspectRatio: 1 }}
              className='hidden md:flex'
          />
        </div>

    </motion.div>
  )
}

export default Globe