import React from 'react'

const Best = () => {
  return (
    <div className='flex py-24 text-primary bg-dark px-44'>
        <div className='flex-1'>
            <img src="Images/star.png" className=' w-[350px]' alt="start-up" />
        </div>
        <div className="flex-1 ml-[-200px]">
            <h2 className=' test leading-[4.5rem] text-7xl '>What we do <span className="text-greenText">Best</span></h2>
            <p className='text-primary text-2xl py-5 leading-10'>Our veteran search professionals have deep expertise supercharged with access to data on 180k candidates llowing us make impactful hires, faster.</p>
            <p className="text-[14px] w-[650px] leading-6">While many search firms promise better candidates and faster hires, we consistently deliver on these promises. Our proven approach setsus apart, ensuring reliable results every time. From GTM (Sales, Marketing, and Partnerships) to Technology (Product and Engineering), and Support Functions (Operations, Finance, Human Resources), to Specialized Teams (Data, Security, and Compliance), we can help</p>
        </div>
    </div>
  )
}

export default Best