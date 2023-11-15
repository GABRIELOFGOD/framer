import React from 'react'
import { Link } from 'react-router-dom'

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
            item: 'fiction by revlab',
            path: 'fiction'
        },
        {
            item: 'about us',
            path: 'about'
        }
    ]

  return (
    <div className='flex w-full h-20 my-auto justify-between py-5 px-28'>
        <img
            src="/Images/Revlab logo (2).png"
            alt="logo"
            className='h-fit'
        />
        <div className='flex gap-32'>
            <ul className='capitalize my-auto flex gap-10'>
                {
                    navlist.map((list, index) => (
                        <Link
                            key={index}
                            to={list.path}
                            className='font-700 text-textGray text-[14px]'
                        >{list.item}</Link>
                    ))
                }
            </ul>
            <button className='bg-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 text-primary px-8'>Get started</button>
        </div>
    </div>
  )
}

export default Header