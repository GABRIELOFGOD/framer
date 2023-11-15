import React from 'react'

const Candidate = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 px-32 py-28">
        <div className=''>
          <h2 className=' test leading-[5rem] text-6xl '>
            Awesome <span className='text-secondary'>startup jobs</span> with Africa’s fastest growing companies
          </h2>
        </div>
        <div className=''>
          <div className='flex flex-col colo gap-3'>
            <div className=' same'><img src="Images/industrial-designers-working-3d-model.jpg" alt="contact-heroe-pic" /></div>
            <div className=' same'><img src="Images/e0259f985e.jpg" alt="contact-heroe-pic" /></div>
            <div className=' same'><img src="Images/young-woman-sitting-staircase-using-laptop-computer-female-working-laptop-outdoor.jpg" alt="contact-heroe-pic" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidate