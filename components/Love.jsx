import React from 'react'
import TestimonyCard from './TestimonyCard'

const Love = () => {

    const testimonies = [
        {
            name: 'Uchenna',
            position: 'VP, Partnerships, ThankUCash',
            testimony: 'The search consultants at Revlab understood my needs, worked closely with me to develop our hiring strategy blue print and successful filled every role on time as promised.'
        },
        {
            name: 'Executive Director',
            position: 'Dee-Jone Oil and Gas',
            testimony: 'To expand our tech team, we turned to Revlab. They acted swiftly, grasped our requirements, and provided candidates who not only understood the job but were also deeply committed and passionate about our mission. Now, Revlab manages all our recruitment needs at Dee-Jones.'
        }
    ]
  return (
    <div className='py-20 px-[300px]'>
        <div className="text-center">
            <p className='text-secondary text-sm font-bold'>CLIENTS REVIEW</p>
            <h2 className='text-4xl py-5'>Loved by industry leaders.</h2>
        </div>
        <div className='flex justify-between'>
            <TestimonyCard content={testimonies[0]} />
            <TestimonyCard content={testimonies[1]} />
        </div>
    </div>
  )
}

export default Love