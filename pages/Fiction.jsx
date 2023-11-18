import React from 'react'
import Hiring from '../components/Hiring'
import Benefits from '../components/Benefits'
import { Link } from 'react-router-dom'

const Fiction = () => {
  return (
    <div>
      <div className='flex overflow-hidden relative bg-dark text-primary gap-10 py-24 px-52'>
        <div className="graddy"></div>
        <div className="flex-1 show">
          <h3 className='text-4xl py-5'><span className="text-greenText">Fraction</span> by <span className="text-secondary">Revlab</span></h3>
          <p className="font-[950] text-xl py-4">Hire A CTO, CMO, CRO or CPO</p>
          <h2 className=' test leading-[4rem] w-[530px] text-6xl '>For <span className="text-secondary">7 to 20 Hours </span><span className="text-greenText">per week | per month</span></h2>
          <p className='w-[600px] pt-5 text-lg font-semibold'>Alternatively consider hiring on a project-based arrangement</p>
          <p className='w-[480px] pb-5 text-lg font-light'>Revlab's fractional talents marketplace is the new secret weapon for start-ups.</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[14px] py-4 text-primary px-8'><Link to='/contact'>Find your next executive</Link></button>
        </div>
        <div className="flex-1 mr-[-70px] show">
          <img src="Images/new new.png" alt="Fiction-Heroe-Image" />
        </div>
      </div>
      <Hiring />
      <Benefits />
    </div>
  )
}

export default Fiction