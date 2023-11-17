import React from 'react'
import AboutFeature from '../components/AboutFeature'
import Hire from '../components/Hire'
import Best from '../components/Best'
import Focus from '../components/Focus'
import NewsLetter from '../components/NewsLetter'
import Globe from '../components/Globe'
import Trustee from '../components/Trustee'
import Love from '../components/Love'

const About = () => {
  return (
    <div>
      <div className='flex gap-10 py-12 px-52'>
        <div className='flex-1'>
          <h2 className=' test w-[600px] leading-[5rem] text-7xl '>The <span className='text-secondary'>modern</span> search firm exclusively for <span className="text-secondary">startups</span> and <span className="text-secondary">scaleups</span></h2>
          <p className='text-textGray w-[400px] text-2xl py-5'>Explore our pools of talents to select which is best for your role</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[14px] font-bold py-4 text-primary px-8'>Get in touch</button>
        </div>
        <div className=" flex-1 mt-[200px] mr-[-80px]">
            <img src="Images/Group 40.png" className='h-full w-full' alt="group image" />  
          </div>
      </div>
      <AboutFeature />
      <Hire />
      <Best />
      {/* <Focus /> */}
      <Globe />
      <Trustee />
      <Love />
      <NewsLetter />
    </div>
  )
}

export default About