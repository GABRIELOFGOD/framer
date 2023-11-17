import React from 'react'
import BenefitCard from './BenefitCard'

const Benefits = () => {

    const benefits = [
        {
            icon: 'Images/Revlabs illustrationaa.png',
            topic: 'PEACE OF MIND',
            text: 'Let your new executive handle their department so you can focus on growth'
        },
        {
            icon: 'Images/100 +.png',
            topic: '100+ EXECUTIVES',
            text: 'Get matched to some of the vetted executives in our fast-growing community.'
        },
        {
            icon: 'Images/25.png',
            topic: '25+ INDUSTRIES AND GROWING',
            text: 'Revlab\'s executives work across SaaS, FinTech, HealthTech, Ecommerce, Mobility, and more.'
        },
        {
            icon: 'Images/ex.png',
            topic: 'EXPERIENCE COUNTS',
            text: 'Over 50% of our executives have 15+ years of experience'
        }
        
    ]
  return (
    <div className='px-42 py-12'>
        <div className='w-full text-center'>
            <p className=' font-bold text-sm text-textGray'>OUR BENEFITS</p>
            <h2 className='text-dark fuller w-full py-8 text-7xl'>Hire <span className="text-secondary">right</span>, Hire <span className="text-secondary">fast</span></h2>
            <p className='text-textGray '>With Revlab, you can find and hire a fractional executive in weeks, not months</p>
        </div>
        <div className='flex flex-wrap px-48 py-24'>
            <BenefitCard content={benefits[0]} />
            <BenefitCard content={benefits[1]} />
            <BenefitCard content={benefits[2]} />
            <BenefitCard content={benefits[3]} />
        </div>
    </div>
  )
}

export default Benefits