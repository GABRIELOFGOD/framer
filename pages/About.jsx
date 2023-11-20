import React from 'react'
import AboutFeature from '../components/AboutFeature'
import Hire from '../components/Hire'
import Best from '../components/Best'
import Focus from '../components/Focus'
import NewsLetter from '../components/NewsLetter'
import Globe from '../components/Globe'
import Trustee from '../components/Trustee'
import Love from '../components/Love'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='md:flex md:gap-10 md:py-12 py-8 px-12 md:px-52'>
        <div className='flex-1'>
          <h2 className=' md:test md:w-[600px] md:leading-[5rem] leading-10 text-[30px] md:text-7xl '>The <span className='text-secondary'>modern</span> search firm exclusively for <span className="text-secondary">startups</span> and <span className="text-secondary">scaleups</span></h2>
          <p className='text-textGray md:w-[400px] text-[12px] py-3 md:text-2xl md:py-5'>Let's talk talent</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[12px] md:py-3 py-2 text-primary px-4 md:px-8'><Link to='/contact'>Get in touch</Link></button>
        </div>
        <div className=" flex-1 md:mt-[200px] mt-5 md:mr-[-80px]">
            <img src="Images/Group 40.png" className='h-full w-full' alt="group image" />  
          </div>
      </div>
      <AboutFeature />
      <Hire />
      <Best />
      {/* <Focus /> */}
      <Globe />
      <Trustee />
      {/* <Love /> */}
      <NewsLetter />
    </div>
  )
}

export default About