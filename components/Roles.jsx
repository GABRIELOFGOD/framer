import React from 'react'
import RoleCard from './RoleCard'

const Roles = () => {

    const contents = [
        {
            topic: 'Register your CV',
            text: 'Register your CV below. We review every registration and we\'ll get back to you within 48 hours.'
        },
        {
            topic: 'Invitation',
            text: 'If we think we can work together, we\'ll invite you to an initial video call. If not, we\'ll let you know why.'
        },
        {
            topic: 'Let\'s contact you',
            text: 'During the call, we\'ll explore your experience and ambitions to better understand if we can support you.'
        },
        {
            topic: 'The result',
            text: 'After the call, we\'ll let you know if we can support your job search. If we can\'t, we\'ll let you know why.'
        },
        {
            topic: 'Your oppourtuinities',
            text: 'We\'ll then search for opportunities on your behalf, make intro\'s to our clients and secure your next job.'
        }
    ]
  return (
    <div className='flex py-32 px-52 gap-6'>
        <div className='flex-1'>
            <p className='text-secondary'>ROLES WE PLACE</p>
            <h2 className=' test leading-[4.5rem] text-6xl '>How we'll work together</h2>
            <p className='text-textGray text-xl w-[82%] pt-6 leading-8'>With hundreds of candidates registering with us each week, our 1:1 approach means we can't work with everyone. Here's what you can expect from us;</p>
            <img className='w-[400px]' src="Images/qqqq.png" alt="block-image" />
            <p className='text-secondary text-xl w-[82%] pt-6 leading-8'>With hundreds of candidates registering with us each week, our 1:1 approach means we can't work with everyone. Here's what you can expect from us;</p>
        </div>
        <div className='flex-1'>
            <RoleCard details={contents[0]} />
            <RoleCard details={contents[1]} />
            <RoleCard details={contents[2]} />
            <RoleCard details={contents[3]} />
            <RoleCard details={contents[4]} />
        </div>
    </div>
  )
}

export default Roles