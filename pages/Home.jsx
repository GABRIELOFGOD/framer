import React from 'react'
import Rocket from '../components/Rocket'
import Discript from '../components/Discript'
import Choose from '../components/Choose'
import Talents from '../components/Talents'
import ScrollPics from '../components/ScrollPics'
import NewsLetter from '../components/NewsLetter'
import Carousel from '../components/Carousel'

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
            <p className='text-textGray text-2xl w-[500px] py-5'>The leading start-up recruiter hiring the best talent for you</p>
            <button className='bg-secondary rounded-full h-fit my-auto text-[15px] py-3 text-primary px-8'>Book a call</button>
          </div>
          <div className="w-[450px] h-[450px] mt-[-100px] mr-[-80px]">
            <img src="Images/baba.png" className='h-full w-full' alt="group image" />  
          </div>
        </div>

      </div>

        {/* ================== ROCKET SECTION ================ */}
        <Rocket />

        {/* ================== FEATURE SECTION ================ */}
        <Discript />

        {/* ================== COROUSEL IMAGE SLIDER ========== */}
        <Carousel />

        {/* ================== WHY CHOOSE SECTION ================ */}
        <Choose />

        {/* ================== TALENTS SECTION ================ */}
        <Talents />

        {/* ================== TALENTS SECTION ================ */}
        {/* <ScrollPics /> */}

        {/* ================== TALENTS SECTION ================ */}
        <NewsLetter />
    </div>
  )
}

export default Home