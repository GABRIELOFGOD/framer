import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Header = () => {

    const navlist = [
        {
            item: 'home',
            path: '/'
        },
        {
            item: 'candidate',
            path: 'candidate'
        },
        {
            item: 'fraction by revlab',
            path: 'fiction'
        },
        {
            item: 'about us',
            path: 'about'
        }
    ]

  return (
    <div className='flex w-full sticky z-50 bg-primary top-0 h-20 my-auto justify-between px-8 py-5 lg:py-5 lg:px-28'>
        <img
            src="/Images/Revlab logo (2).png"
            alt="logo"
            className='w-fit'
        />
        <div className='hidden lg:flex gap-32'>
            <ul className='capitalize my-auto flex gap-10'>
                {
                    navlist.map((list, index) => (
                        <NavLink
                            key={index}
                            to={list.path}
                            className='font-700 text-textGray text-[14px]'
                        >{list.item}</NavLink>
                    ))
                }
            </ul>
            <button className='bg-secondary rounded-full h-fit my-auto text-[14px] py-3 text-primary px-8'><Link to='contact'>Contact us</Link></button>
        </div>
        <div className="lg:hidden my-auto hover:text-secondary cursor-pointer text-2xl"><FaBars /></div>
    </div>
  )
}

export default Header