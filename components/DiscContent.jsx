import React from 'react'

const DiscContent = () => {
  return (
    <div>
        <div className='mx-auto flex box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full py-20'>
                <div className="mx-auto">
                    <h2 className='text-7xl text-left leading-[5rem] w-[300px]'>Executive <span className='text-secondary'>Search</span></h2>
                    <p className='text-textGray py-5 text-xl w-[350px]'>Finding visionary leaders who will steer your startup toward success. We identify, vet, and place top-tier executives who align with your company's mission and culture. </p>
                    <button className='bg-secondary shadow-md w-fit shadow-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 text-primary px-8'>Get in touch now</button>
                </div>
            </div>
            <div className='flex-1 w-full h-full'>
                <img className='h-full' src="Images/african-american-business-man-reading-news-talking-phone.jpg" alt="disc image" />
            </div>
        </div>
        <div className='mx-auto flex flex-row-reverse box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full py-20'>
                <div className="mx-auto pl-10">
                    <h2 className='text-7xl text-left leading-[5rem] w-[600px]'>Technical <span className='text-secondary'>Talent </span>Acquisition</h2>
                    <p className='text-textGray py-5 text-xl w-[350px]'>Building high-performing technical teams is our specialty. We source and recruit top engineering, development, and technical talent to drive your product innovation.  </p>
                </div>
            </div>
            <div className='flex-1 ahh w-full h-full'>
                <img className='w-full' src="Images/woman-keeps-stylus-temple-uses-graphic-tablet-painting-works-with-digital-touch-pad-application-poses-street-downton-against-city-skyscraper-develops-new-design (1).jpg" alt="disc image" />
            </div>
        </div>
        <div className='mx-auto flex box-border h-[600px]'>
            <div className='flex-1 flex flex-col w-fit text-left h-full py-20'>
                <div className="mx-auto">
                    <h2 className='text-7xl text-left leading-[4rem] w-[300px]'>Fractional <span className='text-secondary'>Leadership</span></h2>
                    <p className='text-textGray py-5 text-xl w-[350px]'>Access the talents you need to drive strategy, structure your teams, and scale operations without the burden of a full compensation package</p>
                    <div className='flex gap-8'>
                        <button className='bg-secondary shadow-md w-fit shadow-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 text-primary px-8'>Get started</button>
                        <button className='bg-primary shadow-md w-fit shadow-secondary rounded-full h-fit my-auto text-[12px] font-bold py-3 px-8'>Learn more</button>
                    </div>
                </div>
            </div>
            <div className='flex-1 ehh'>
                <img className='h-fit' src="Images/workers-giving-ideas-new-project.jpg" alt="disc image" />
            </div>
        </div>
    </div>
  )
}

export default DiscContent