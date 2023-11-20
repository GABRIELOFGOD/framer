import React, { useEffect, useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
    const [open, setOpen] = useState(false)
    
        // useEffect(() => {
        //     if(window.scrollY){
        //         setOpen(true)
        //     }
        // }, [])

    const navlist = [
        {
            item: 'home',
            path: '/'
        },
        {
            item: 'candidate',
            path: '/candidate'
        },
        {
            item: 'fraction by revlab',
            path: '/fraction'
        },
        {
            item: 'about us',
            path: '/about'
        }
    ]

    const navOpen = () => {
        setOpen(!open)
    }

    const clickAway = () => {
        setOpen(false)
    }

  return (
    <div className='flex w-full sticky z-50 bg-primary top-0 lg:h-20 my-auto justify-between px-6 md:px-8 py-2 md:py-3 lg:py-5 lg:px-10'>
        <Link to='/' className='my-auto'>
            <img
                src="/Images/Revlab logo (2).png"
                alt="logo"
                className='md:w-fit w-[100px]'
            />
        </Link>
        <div className={`${open ? 'open' : 'close'} lg:hidden gap-10 lg:relative absolute`}>
            <ul className='md:flex todo capitalize gap-x-10'>
                {
                    navlist.map((list, index) => (
                        <NavLink
                            onClick={clickAway}
                            key={index}
                            to={list.path}
                            className='font-700 my-auto dex text-textGray capitalize text-[14px]'
                        >{list.item}</NavLink>
                    ))
                }
            </ul>
            <button onClick={clickAway} className='bg-secondary rounded-full h-fit my-auto text-[14px] py-3 text-primary px-8'><Link to='contact'>Contact us</Link></button>
        </div>
        <div className={`hidden lg:flex gap-10`}>
            <ul className='md:flex todo capitalize gap-x-10'>
                {
                    navlist.map((list, index) => (
                        <NavLink
                            onClick={clickAway}
                            key={index}
                            to={list.path}
                            className='font-700 my-auto dex text-textGray capitalize text-[14px]'
                        >{list.item}</NavLink>
                    ))
                }
            </ul>
            <button onClick={clickAway} className='bg-secondary rounded-full h-fit my-auto text-[14px] py-3 text-primary px-8'><Link to='contact'>Contact us</Link></button>
        </div>
        {open ? <div onClick={navOpen} className="lg:hidden transition-all duration-500 my-auto hover:text-secondary cursor-pointer text-2xl"><IoMdClose /></div> : <div onClick={navOpen} className="lg:hidden transition-all duration-500 my-auto hover:text-secondary cursor-pointer text-2xl"><FaBars /></div>}
    </div>
  )
}

export default Header