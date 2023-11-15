import React from 'react'

const ChooseComp = ({comp}) => {
  return (
    <div className='border-secondary w-[600px] flex gap-8 rounded-xl m-3 border-2 py-12 px-12'>
        <i className='text-3xl text-secondary'>{comp.icon}</i>
        <div>
            <h2 className='text-2xl pb-6'>{comp.topic}</h2>
            <p className='text-textGray text-lg'>{comp.text}</p>
        </div>
    </div>
  )
}

export default ChooseComp