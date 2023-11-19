import React from 'react'
import Job from '../components/Job'
import Roles from '../components/Roles'
import CV from '../components/CV'
import NewsLetter from '../components/NewsLetter'
import Recruit from '../components/Recruit'
import SubmitCv from '../components/SubmitCv'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const Candidate = () => {

  const card = [
    {

    }
  ]

  return (
    <div>
      <div className="relative px-12 gap-4 md:px-52 md:pb-44 md:pt-28">
        <div className=''>
          <h2 className=' md:test leading-8 md:leading-[5.5rem] text-[30px] md:w-[500px] md:text-6xl '>
            Awesome <span className='text-secondary'>startup jobs</span> with Africa’s fastest growing companies
          </h2>
          <p className='md:text-lg text-[12px] py-4 md:leading-8 md:py-5 text-textGray md:w-[300px]'>Register your CV to be kept in the loop with relevant jobs at startups we think you'll like.</p>
          <button className='bg-secondary rounded-full h-fit my-auto py-2 px-3 text-[12px] md:text-[14px] md:py-3 text-primary md:px-8'><Link to='/contact'>Get started</Link></button>
        </div>
        <div>
          <img className='md:w-[420px] w-[300px] mx-auto py-5 md:py-0 md:absolute md:top-20 md:right-[200px]' src="Images/Group 4244.png" alt="candidate-image" />
        </div>
      </div>
      <Job />
      <Roles />
      {/* <CV /> */}
      <SubmitCv />
      <Card />
      {/* <Recruit /> */}
      <NewsLetter />
    </div>
  )
}

export default Candidate