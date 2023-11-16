import React from 'react'
import Job from '../components/Job'
import Roles from '../components/Roles'
import CV from '../components/CV'
import NewsLetter from '../components/NewsLetter'
import Recruit from '../components/Recruit'

const Candidate = () => {
  return (
    <div>
      <div className="flex gap-4 px-52 py-28">
        <div className='flex-1'>
          <h2 className=' test leading-[5rem] text-6xl '>
            Awesome <span className='text-secondary'>startup jobs</span> with Africa’s fastest growing companies
          </h2>
          <p className='text-[22px] leading-8 py-5 text-textGray w-[400px]'>Register your CV to be kept in the loop with relevant jobs at startups we think you'll like.</p>
          <button className='bg-secondary rounded-full h-fit my-auto text-[14px] font-bold py-3 text-primary px-8'>Get started</button>
        </div>
        <div className='flex flex-1 h-[85vh]'>
          <div className="overflow-scroll web flex-1 h-full">
            <div className=''>
              <div className=' same'><img src="Images/industrial-designers-working-3d-model.jpg" alt="contact-heroe-pic" /></div>
              <div className=' same'><img src="Images/e0259f985e.jpg" alt="contact-heroe-pic" /></div>
              <div className=' same'><img src="Images/young-woman-sitting-staircase-using-laptop-computer-female-working-laptop-outdoor.jpg" alt="contact-heroe-pic" /></div>
            </div>
          </div>
          <div className="overflow-scroll web flex-1 h-full">
            <div className=''>
              <div className=' same'><img src="Images/business-women-talking-near-desk-during-coffee-break-hallway-big-corporation.jpg" alt="contact-heroe-pic" /></div>
              <div className=' same'><img src="Images/bf853f8574.jpg" alt="contact-heroe-pic" /></div>
              <div className=' same'><img src="Images/african-american-business-woman.jpg" alt="contact-heroe-pic" /></div>
            </div>
          </div>
        </div>
      </div>
      <Job />
      <Roles />
      <CV />
      {/* <Recruit /> */}
      <NewsLetter />
    </div>
  )
}

export default Candidate