import React, { useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    const [open, setOpen] = useState(true)

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

  return (
    <div className='flex w-full sticky z-50 bg-primary top-0 h-20 my-auto justify-between px-8 py-5 lg:py-5 lg:px-28'>
        <Link to='/'>
            <img
                src="/Images/Revlab logo (2).png"
                alt="logo"
                className='w-fit'
            />
        </Link>
        <div className={open ? ' lg:flex gap-32 lg:relative absolute top-[-300px]' : 'block transition-all duration-500 bg-primary w-full absolute top-20 left-0 py-10 px-12'}>
            <ul className={open ? 'capitalize my-auto flex gap-10' : 'capitalize open'}>
                {
                    navlist.map((list, index) => (
                        <NavLink
                            key={index}
                            to={list.path}
                            className='font-700 dex text-textGray text-[14px]'
                        >{list.item}</NavLink>
                    ))
                }
            </ul>
            <button className='bg-secondary rounded-full h-fit my-auto text-[14px] py-3 text-primary px-8'><Link to='contact'>Contact us</Link></button>
        </div>
        <div onClick={navOpen} className="lg:hidden my-auto hover:text-secondary cursor-pointer text-2xl"><FaBars /></div>
    </div>
  )
}

export default Header