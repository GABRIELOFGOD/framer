import React from 'react'

const Trustee = () => {
  return (
    <div className='flex gap-5 bg-dark py-32 px-52'>
        <div className="flex-1">
            <img className='w-[450px]' src="Images/glass.png" alt="Trustee-Image" />
        </div>
        <div className="flex-1 my-auto text-primary">
            <h2 className='text-7xl'>Consented data on <span className="text-greenText">180,000 +</span> candidates</h2>
            <p className='text-xl pt-20'>We want to cut the time it takes to make an exceptional hire without compromising on Talent quality</p>
        </div>
    </div>
  )
}

export default Trustee