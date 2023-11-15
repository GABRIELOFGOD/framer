import React from 'react'

const NewsLetter = () => {
  return (
    <div className='p-32'>
        <div className='bg-secondary rounded-xl px-12 py-14 flex'>
            <div className='w-[70%'>
                <h2 className="text-5xl pb-4 text-primary">Join Our Newsletter</h2>
                <p className='text-primary leading-6 text-sm w-[70%]' >Stay ahead of the curve with our newsletter, where we share exclusive insights, industry news, and expert advice. Subscribe today and be part of our growing community of tech startup enthusiasts. </p>
                <form onSubmit={e => e.preventDefault()} className='flex gap-3 relative py-5 w-[70%]'>
                    <input type="text" className='rounded-xl w-full px-5' placeholder='example@yourmail.com' />
                    <button className='p-4 bg-black text-primary rounded-xl'>Subscribe</button>
                </form>
            </div>
            <img className='w-[300px]' src="Images/mail with a frosted glass effect.png" alt="newsletter" />
        </div>
    </div>
  )
}

export default NewsLetter