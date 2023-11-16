import React from 'react'

import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io'

const Focus = () => {
  return (
    <div className='grid grid-cols-2 box-border gap-10 pt-20 px-40 h-[100vh]'>
        <div className=' my-auto'>
            <h2 className=' w-[300px] leading-[6rem] text-8xl '>Our <span className="text-secondary"><i>Focus</i></span></h2>
            <div className='flex gap-10 my-12 mx-auto'>
                <div className="p-3 text-5xl bg-gray-200 rounded-full"><IoMdArrowBack /></div>
                <div className="p-3 text-5xl bg-gray-200 rounded-full"><IoMdArrowForward /></div>
            </div>
        </div>
        <div className=" w-full h-[100%]">
            <div className="overflow-x-scroll scroller flex h-full-scroll">
                <p className='h-[500px] font-[600] mx-4 text-primary leading-[3rem] text-4xl w-[450px] p-12 bg-secondary rounded-[50px]'><span className="text-dark">Go-To-Market Teams:</span> Sales Customer Success Marketing Partnerships</p>
                <p className='h-[500px] font-[600] mx-4 text-primary leading-[3rem] text-4xl w-2/3 p-12 bg-greenText rounded-[50px]'><span className="text-dark">Support Functions: Operations, Finance and Legal,Human Resources,</span></p>
                <p className='h-[500px] font-[600] mx-4 text-primary leading-[3rem] text-4xl w-2/3 p-12 bg-secondary rounded-[50px]'>Technology Teams Product Engineering</p>
            </div>
        </div>
    </div>
  )
}

export default Focus