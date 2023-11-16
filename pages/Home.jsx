import React from 'react'
import Rocket from '../components/Rocket'
import Discript from '../components/Discript'
import Choose from '../components/Choose'
import Talents from '../components/Talents'
import ScrollPics from '../components/ScrollPics'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  // const rocketLikes = [
  //   {
  //     image: 'Images/star.png',
  //     heading: 'Only for people who want to work in ',

  //   }
  // ]

  return (
    <div>
      <div className='w-full py-28 px-48'>
        {/* =============== HEROE SECTION ====================== */}
        <h2 className='w-[850px] test leading-[5rem] text-7xl '>
          We <span className='text-secondary'>build the Teams</span> behind Africa's most promising <span className='text-secondary'>Start-ups</span>
        </h2>
        <div className='flex justify-between'>
          <div className='text-left'>
            <p className='text-textGray text-2xl w-[400px] py-5'>Explore our pools of talents to select which is best for your role</p>
            <button className='bg-secondary shadow-md shadow-secondary rounded-full h-fit my-auto text-[14px] font-bold py-3 text-primary px-8'>Get started</button>
          </div>
          <div className="w-[450px] h-[450px] mr-[-80px]">
            <img src="Images/Group 38.png" className='h-full w-full' alt="group image" />  
          </div>
        </div>

      </div>

        {/* ================== ROCKET SECTION ================ */}
        <Rocket />

        {/* ================== FEATURE SECTION ================ */}
        <Discript />

        {/* ================== WHY CHOOSE SECTION ================ */}
        <Choose />

        {/* ================== TALENTS SECTION ================ */}
        <Talents />

        {/* ================== TALENTS SECTION ================ */}
        <ScrollPics />

        {/* ================== TALENTS SECTION ================ */}
        <NewsLetter />
    </div>
  )
}

export default Home