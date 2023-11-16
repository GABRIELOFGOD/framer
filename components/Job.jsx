import React from 'react'

const Job = () => {
  return (
    <div className='flex gap-5 py-32 px-48'>
        <div className='jug flex-1'>
            <div className='img1 sames'><img src="Images/medium-shot-smiley-graduate-student.jpg" alt="graduate-image" /></div>
            <div className='img2 sames'><img src="Images/portrait-young-woman-with-laptop-hands-outside-school.jpg" alt="graduate-image" /></div>
            <div className='img3 sames'><img src="Images/medium-shot-male-flight-attendant-posing.jpg" alt="graduate-image" /></div>
        </div>
        <div className='flex-1'>
            <h2 className=' test leading-[5rem] text-7xl '>
                Jobs at all levels, from <span className='text-secondary'>Graduate</span> to <span className='text-secondary'>C-Level</span>
            </h2>
        </div>
    </div>
  )
}

export default Job