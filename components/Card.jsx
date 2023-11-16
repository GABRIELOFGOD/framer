import React from 'react'

const Card = () => {
  return (
    <div className='m-auto py-20 px-[310px] justify-center'>
        <div className="grid gap-7 grid-cols-2">
            <div className="flex-1 border-2 h-fit w-fit text-5xl font-[500] py-10 leading-[4.5rem] px-6 rounded-[65px] border-secondary"><h2>Meet the <span className="text-secondary">Best recruiters</span> you'll ever worked with</h2></div>
            <img className='flex-1 w-[350px]' src="Images/Revlabs illustration.png" alt="card-image" />
        </div>
        <div className="flex-1 border-2 h-fit w-fit py-10 text-center px-12 rounded-[65px] border-secondary">
            <h2 className=' text-5xl font-[500]'>Your <span className="text-secondary">Startup job</span> and <span className="text-secondary">Search</span> patner</h2>
            <p className="text-textGray pt-7 text-left text-lg">We work with the best talent at every level so if you’re looking for your next job and want to join a high growth startup, we’ll ensure you have the best chance of getting hired.</p>
        </div>
    </div>
  )
}

export default Card