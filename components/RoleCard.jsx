import React from 'react'

const RoleCard = ({details}) => {
  return (
    <div className='p-10 mb-5 border-2 border-secondary shadow shadow-secondary rounded-lg'>
        <h2 className='text-xl pb-4'>{details.topic}</h2>
        <p className='text-textGray pr-14'>{details.text}</p>
    </div>
  )
}

export default RoleCard