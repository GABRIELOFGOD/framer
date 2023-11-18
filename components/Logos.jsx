import React from 'react'
import { baseUrl } from '../context/serverCall'

const Logos = () => {
  return (
    <div className='hidden md:block'>
        <h2 className='text-3xl px-20'>Used by <span className="text-secondary">African's</span> fast growing company</h2>
        <div className='py-6'>
            <div className=' flex wili justify-between px-24 w-full'>
                <img src='Images/1.jpg' alt="Logo-carousel" />
                <img src='Images/2.jpg' alt="Logo-carousel" />
                {/* <img src="Images/2.jpg" alt="Logo-carousel" /> */}
                <img src='Images/3.jpg' alt="Logo-carousel" />
                <img src='Images/4.jpg' alt="Logo-carousel" />
                <img src='Images/5.jpg' alt="Logo-carousel" />
                <img src='Images/7.jpg' alt="Logo-carousel" />
                {/* <img src={`${baseUrl}7.jpg`} alt="Logo-carousel" /> */}
            </div>
        </div>
    </div>
  )
}

export default Logos