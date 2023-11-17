import React from 'react'
import Hiring from '../components/Hiring'
import Benefits from '../components/Benefits'

const Fiction = () => {
  return (
    <div>
      <div className='flex overflow-hidden relative bg-dark text-primary gap-10 py-24 px-52'>
        <div className="graddy"></div>
        <div className="flex-1 show">
          <h3 className='text-4xl py-5'><span className="text-greenText">Fraction</span> by <span className="text-secondary">Revlab</span></h3>
          <p className="font-[950] text-xl py-4">Hire A CTO, CMO, CRO or CPO</p>
          <h2 className=' test leading-[4rem] w-[500px] text-6xl '>For <span className="text-secondary">7 to 20 Hours</span> Per <span className="text-greenText">Week</span></h2>
          <p className='w-[400px] py-4 text-xl'>Revlab’s fractional talent marketplace is the new secret weapon for startups.</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[14px] font-bold py-3 text-primary px-8'>Find your next Executive</button>
        </div>
        <div className="flex-1 show">
          <img src="Images/pic.png" alt="Fiction-Heroe-Image" />
        </div>
      </div>
      <Hiring />
      <Benefits />
    </div>
  )
}

export default Fiction