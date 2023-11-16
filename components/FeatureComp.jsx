import React from 'react'

const FeatureComp = ({content}) => {
  return (
    <div className='px-8 py-8 mx-3 rounded-xl w-[300px] bgan'>
        {/* <div className='text-3xl mb-3 text-secondary p-3 bg-dark w-fit rounded-full'>{content.icon}</div> */}
        <b className='text-primary leading-6 font-light text-[22px]'>{content.text}</b>
    </div>
  )
}

export default FeatureComp