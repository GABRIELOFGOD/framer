import React from 'react'
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

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

  return (
    <div className='flex bg-black py-24 px-32'>
        <div className="w-2/3">
            <h2 className='text-5xl text-primary'>Sectors we <span className="text-secondary">Cover</span></h2>
            <div className='flex spenza flex-wrap'>
                <img src="Images/Group 360.png" alt="globe-marketing icon" />
                <img src="Images/Group 361.png" alt="globe-marketing icon" />
                <img src="Images/Group 359.png" alt="globe-marketing icon" />
                <img src="Images/Group 362.png" alt="globe-marketing icon" />
                <img src="Images/Group 363.png" alt="globe-marketing icon" />
                <img src="Images/Group 364.png" alt="globe-marketing icon" />
                <img src="Images/Group 365.png" alt="globe-marketing icon" />
                <img src="Images/Group 366.png" alt="globe-marketing icon" />
                <img src="Images/Group 367.png" alt="globe-marketing icon" />
                <img src="Images/Group 368.png" alt="globe-marketing icon" />
            </div>
        </div>
        <div className="w-[40%] items-start">
        <canvas
            ref={canvasRef}
            style={{ width: 700, height: 500, maxWidth: "100%", aspectRatio: 1 }}
            />
        </div>

    </div>
  )
}

export default Globe