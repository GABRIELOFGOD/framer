import React from 'react'

const Rocket = () => {
  return (
    <div className='flex mx-auto bg-dark py-44 px-24'>
        <div className='flex-1'>
            <img src="Images/star.png" className='mx-auto w-[350px]' alt="start-up" />
        </div>
        <div className='flex-1'>
            <h2 className='w-[500px] leading-[4.5rem] text-primary text-6xl '>Only for people who want to work in <span className='text-greenText'>Startups</span></h2>
            <p className='w-[510px] leading-[2rem] text-[20px] font-light text-primary py-5'>We're passionate about startups and so if you're looking for your next job and want to join a high growth company, this is the place for you.</p>
        </div>
    </div>
  )
}

export default Rocket