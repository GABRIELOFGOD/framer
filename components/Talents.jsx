import React from 'react'

const Talents = () => {
  return (
    <div className='flex flex-row-reverse mx-auto bg-dark py-44 px-32'>
        <div className='flex-1'>
            <img src="Images/cup.png" className='mx-auto w-[350px]' alt="start-up" />
        </div>
        <div className='flex-1'>
            <h2 className='w-[650px] leading-[4.5rem] text-primary text-6xl '>Hire the best <span className='text-greenText'>Talents </span>for your Start-up Teams</h2>
            <p className='w-[510px] leading-[2rem] text-[19px] text-primary py-5'>In the ever-evolving landscape of technology startups, one thing remains constant: the need for exceptional talent. At Revlab, we're here to connect visionaries with the leaders who can turn those visions into reality.</p>
            <button className='bg-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 text-primary px-8'>Get in touch</button>
        </div>
    </div>
  )
}

export default Talents