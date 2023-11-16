import React from 'react'

import { FaRegUser } from 'react-icons/fa'

const TestimonyCard = ({content}) => {
  return (
    <div className='w-1/2 border pb-16 relative mx-3 border-gray-200 py-8 px-6 rounded-[20px]'>
        <p className='leading-7 text-sm'>{content.testimony}</p>
        <div className='flex gap-3 bottom-3 absolute pt-12 my-auto'>
            <div className="p-3 bg-gray-200 h-fit rounded-full"><FaRegUser className='my-auto' /></div>
            <div className='text-xs my-auto'>
                <p className=''>{content.name}</p>
                <p className='text-secondary'>{content.position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonyCard