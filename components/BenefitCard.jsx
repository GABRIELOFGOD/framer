import React from 'react'

const BenefitCard = ({content}) => {
  return (
    <div className='h-[100px] m-3 overflow-hidden flex rounded-[20px] shadow-sm shadow-gray-400 border-2 border-gray-200 w-[500px]'>
        <div className=""><img className='h-full ' src={content.icon} alt="benefit-Image" /></div>
        <div className='p-3 text-xs my-auto'>
            <p className='pb-3 font-bold text-black'>{content.topic}</p>
            <p className='text-dark font-[600]'>{content.text}</p>
        </div>
    </div>
  )
}

export default BenefitCard