import React from 'react'
import Job from '../components/Job'
import Roles from '../components/Roles'
import CV from '../components/CV'
import NewsLetter from '../components/NewsLetter'
import Recruit from '../components/Recruit'
import SubmitCv from '../components/SubmitCv'
import Card from '../components/Card'

const Candidate = () => {

  const card = [
    {

    }
  ]

  return (
    <div>
      <div className="relative gap-4 px-52 pb-[250px]  py-28">
        <div className=''>
          <h2 className=' test leading-[5rem] text-6xl '>
            Awesome <span className='text-secondary'>startup jobs</span> with Africa’s fastest growing companies
          </h2>
          <p className='text-[22px] leading-8 py-5 text-textGray w-[600px]'>Register your CV to be kept in the loop with relevant jobs at startups we think you'll like.</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[14px] font-bold py-3 text-primary px-8'>Get started</button>
        </div>
        <div>
          <img className='w-[350px] absolute bottom-10 right-[250px]' src="Images/ahuhau.png" alt="candidate-image" />
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