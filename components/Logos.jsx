import React from 'react'

const Logos = () => {
  return (
    <div className=' md:block'>
        <h2 className='md:text-3xl text-[30px] text-center md:text-left md:px-20'>Used by fast-growing <span className="text-secondary">companies</span></h2>
        <div className='py-6'>
            <div className=' md:flex grid gap-x-3 grid-cols-3 mx-auto items-center justify-evenly md:wili md:justify-between md:px-24 w-full'>
                <img src='Images/1.jpg' alt="Logo-carousel" />
                <img src='Images/2.jpg' alt="Logo-carousel" />
                <img src="Images/rayda new.png" alt="Logo-carousel" />
                <img src='Images/3.jpg' alt="Logo-carousel" />
                <img src='Images/4.jpg' alt="Logo-carousel" />
                <img src='Images/5.jpg' alt="Logo-carousel" />
                <img className='hidden md:block' src='Images/7.jpg' alt="Logo-carousel" />
                {/* <img src={`${baseUrl}7.jpg`} alt="Logo-carousel" /> */}
            </div>
        </div>
    </div>
  )
}

export default Logos