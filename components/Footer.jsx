import React from 'react'

import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  const heading = [
    {
      text: 'home',
      path: '/'
    },
    {
      text: 'about us',
      path: 'about'
    },
    {
      text: 'candidates',
      path: 'candidate'
    }
  ]

  const quickLink = [
    {
      text: 'Our Offerings',
      path: ''
    },
    {
      text: 'Executive Search',
      path: ''
    },
    {
      text: 'Fractional Hiring',
      path: ''
    },
    {
      text: 'Technical Talent Acquisition',
      path: ''
    }
  ]

  const blog = [
    {
      text: 'blog',
      path: ''
    },
    {
      text: 'contact us',
      path: 'contact'
    }
  ]

  const social = [<BsFacebook />, <BsTwitter />, <BsLinkedin />]

  return (
    <div className='bg-dark p-8 md:px-24 md:py-8 md:flex'>
      <div className='flex-1'>
        <img className='w-[150px]' src="Images/Revlab logo.png" alt="logo" />
        <p className='text-textGray text-md pb-5 w-[400px] '>At Revlab, we partner with high-growth startups to source top-tier talent across all levels, from entry-level to C-suite. Our collaborative approach involves deeply understanding your company culture and specific requirements, enabling us to identify candidates perfectly aligned with your needs.</p>
        <div className='flex gap-4'>
          {social.map((icon, index) => (<div className='text-primary p-2 rounded-full bg-textGray' key={index}>{icon}</div>))}
        </div>
      </div>
      <div className='flex-1 md:flex mt-10 gap-20'>
        <div className='flex capitalize flex-col leading-10 text-primary'>
          {
            heading.map((item, index) => (
              <NavLink className='capitalize' key={index} to={item.path}>{item.text}</NavLink>
            ))
          }
        </div>
        <div className='flex flex-col leading-10 text-primary'>
          {
            quickLink.map((item, index) => (
              <NavLink className='capitalize' key={index} to={item.path}>{item.text}</NavLink>
            ))
          }
        </div>
        <div className='flex flex-col leading-10 text-primary'>
          {
            blog.map((item, index) => (
              <NavLink className='capitalize' key={index} to={item.path}>{item.text}</NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer