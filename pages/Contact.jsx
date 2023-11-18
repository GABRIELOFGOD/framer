import React from 'react'
import { BsTwitter, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs'

import { IoMdArrowForward } from 'react-icons/io'

const Contact = () => {

    const social = [
        {
            icon: <BsTwitter />,
            path: ''
        },
        {
            icon: <BsLinkedin />,
            path: ''
        },
        {
            icon: <BsInstagram />,
            path: ''
        },
        {
            icon: <BsYoutube />,
            path: ''
        }
    ]

  return (
    <div className=' py-20 px-52'>
        <div className='flex'>
            <div className='flex-1'>
                <p className='font-[600] text-sm'>CONTACT US</p>
                <h2 className='test leading-[4rem] py-8 text-5xl '>There is a modern way to hire. <span className="text-secondary">Let's show you</span></h2>
                <p className='text-textGray text-md py-3 font-[500]'>Our friendly team would love to hear from you</p>
            </div>
            <div className="flex-1"><img className='' src="Images/MESSAGE.png" alt="aeroplane-image" /></div>
        </div>
        <div className='flex gap-10'>
            <form className='form flex-1' onSubmit={e => e.preventDefault()}>
                <input className='w-full p-3 my-3 box-border rounded-xl' type="text" placeholder='Name' />
                <input className='w-full p-3 my-3 box-border rounded-xl' type="text" placeholder='Email' />
                <textarea className='w-full p-3 my-3 box-border rounded-xl' name="" id="" cols="10" placeholder='Message' rows="10"></textarea>
                <button className='bg-secondary w-full rounded-xl h-fit my-auto text-[14px] font-bold py-5 text-primary px-8'>Send Message</button>
            </form>
            <div className='flex-1'>
                <div className=''>
                    <div className='text-2xl'>Contact us via Email</div>
                    <p className='py-4 text-md text-textGray'>Hire@hirewithrevlab.com</p>
                    <span className='flex gap-3'>Book a call on Calendly <i className='my-auto text-secondary font-bold text-xl'><IoMdArrowForward /></i> </span>
                </div>
                <div className='py-8'>
                    <div className='text-2xl'>Address</div>
                    <p className='py-4 text-md text-textGray'>Ikeja Lagos, Nigeria.</p>
                </div>
                <div>
                    {/* <p className='flex gap-3'>Tel: +2349061932179 <i className='my-auto text-secondary font-bold text-xl'><IoMdArrowForward /></i></p> */}
                    <div className='flex gap-5 py-5'>
                        {social.map((media, index)=>(
                            <div className='p-[10px] rounded-full text-primary bg-secondary' key={index}>{media.icon}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact