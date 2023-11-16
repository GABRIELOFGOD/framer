import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const RoleCard = ({details}) => {
  return (
    <div className='p-10 mb-5 border-2 border-secondary kizz2 rounded-lg'>
        <h2 className='text-xl pb-4'>{details.topic}</h2>
        <p className='text-textGray pr-14'>{details.text}</p>
        {details.link && <p className="text-secondary font-bold py-3 flex my-auto gap-2">{details.link}<IoMdArrowForward className='font-bold text-xl my-auto' /></p>}
    </div>
  )
}

export default RoleCard