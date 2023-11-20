import React from 'react'
import Hiring from '../components/Hiring'
import Benefits from '../components/Benefits'
import { Link } from 'react-router-dom'

const Fiction = () => {
  return (
    <div>
      <div className='md:flex overflow-hidden relative bg-dark text-primary md:gap-10 px-12 py-10 md:py-24 md:px-52'>
        <div className="md:graddy hidden"></div>
        <div className="flex-1 show">
          <h3 className='md:text-4xl text-[20px] py-5'><span className="text-greenText">Fraction</span> by <span className="text-secondary">Revlab</span></h3>
          <p className="font-[950] text-[12px] md:text-xl md:py-4">Hire A CTO, CMO, CRO or CPO</p>
          <h2 className=' md:test md:leading-[4rem] md:w-[530px] text-[30px] md:text-6xl '>For <span className="text-secondary">7 to 20 Hours </span><span className="text-greenText">per week | per month</span></h2>
          <p className='md:w-[600px] pt-5 text-[12px] md:text-lg font-semibold'>Alternatively consider hiring on a project-based arrangement</p>
          <p className='md:w-[480px] pb-5 md:text-lg text-[12px] font-light'>Revlab's fractional talent marketplace is the new secret weapon for start-ups.</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[12px] md:py-4 py-3 px-4 text-primary md:px-8'><Link to='/contact'>Find your next executive</Link></button>
        </div>
        <div className="flex-1 mt-5 md:mt-0 md:mr-[-70px] show">
          <img src="Images/new new.png" alt="Fiction-Heroe-Image" />
        </div>
      </div>
      <Hiring />
      <Benefits />
    </div>
  )
}

export default Fiction