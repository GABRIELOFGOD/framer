import React from 'react'
import { BsTwitter, BsLinkedin, BsYoutube, BsInstagram } from 'react-icons/bs'

import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Contact = () => {

    const social = [
        {
            icon: <BsTwitter />,
            path: 'https://x.com/revlabafrica?s=21&t=aSKeP5XmBTV55S4cYP-g6A'
        },
        {
            icon: <BsLinkedin />,
            path: 'https://www.linkedin.com/company/revlab-inc/'
        },
        {
            icon: <BsInstagram />,
            path: 'https://instagram.com/revlab_africa?igshid=NGVhN2U2NjQ0Yg=='
        },
        // {
        //     icon: <BsYoutube />,
        //     path: ''
        // }
    ]

  return (
    <div className='py-8 px-10 md:py-20 md:px-52'>
        <div className='md:flex'>
            <div className='flex-1'>
                <p className='font-[600] text-sm'>CONTACT US</p>
                <h2 className='md:test md:leading-[4rem] md:py-8 leading-8 py-3 text-[30px] md:text-5xl '>There is a modern way to hire. <span className="text-secondary">Let's show you</span></h2>
                <p className='text-textGray md:text-md text-[12px] py-3 font-[500]'>Our friendly team would love to hear from you</p>
            </div>
            <div className="flex-1 hidden md:flex"><img className='' src="Images/MESSAGE.png" alt="aeroplane-image" /></div>
        </div>
        <div className='md:flex md:gap-10'>
            <form className='form md:pb-0 pb-10 flex-1' onSubmit={e => e.preventDefault()}>
                <input className='w-full p-3 my-3 box-border rounded-xl' type="text" placeholder='Name' />
                <input className='w-full p-3 my-3 box-border rounded-xl' type="text" placeholder='Email' />
                <textarea className='w-full p-3 my-3 box-border rounded-xl' name="" id="" cols="10" placeholder='Message' rows="10"></textarea>
                <button className='bg-secondary w-full rounded-xl h-fit my-auto text-[12px] py-5 text-primary px-8'>Send Message</button>
            </form>
            <div className='flex-1'>
                <div className=''>
                    <div className='md:text-2xl text-lg'>Contact us via Email</div>
                    <p className='md:py-4 py-2 text-[12px] md:text-md text-textGray'>Hire@hirewithrevlab.com</p>
                    <span className='flex text-md md:text-lg gap-3'>Book a call on Calendly <i className='my-auto text-secondary font-bold text-xl'><IoMdArrowForward /></i> </span>
                </div>
                <div className='py-8'>
                    <div className='md:text-2xl text-lg'>Address</div>
                    <p className='py-4 text-[12px] md:text-md text-textGray'>20436 97A Avenue, Langley, BC V1M 2K1, Canada.</p>
                </div>
                <div>
                    {/* <p className='flex gap-3'>Tel: +2349061932179 <i className='my-auto text-secondary font-bold text-xl'><IoMdArrowForward /></i></p> */}
                    <div className='flex gap-5 py-5'>
                        {social.map((media, index)=>(
                            <Link to={media.path} key={index}>
                                <div className='p-[10px] rounded-full text-primary bg-secondary'>{media.icon}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact