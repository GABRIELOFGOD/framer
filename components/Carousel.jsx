import React from 'react'
import CarouselContent from './CarouselContent'

const Carousel = () => {

    const content = [
        {
            icon: 'Images/Iconoir-1.png',
            text: 'oprations'
        },
        {
            icon: 'Images/Iconoir-3.png',
            text: 'partnership'
        },
        {
            icon: 'Images/Iconoir-7.png',
            text: 'sales'
        },
        {
            icon: 'Images/Iconoir-6.png',
            text: 'customer success'
        },
        {
            icon: 'Images/Iconoir-2.png',
            text: 'product'
        },
        {
            icon: 'Images/Iconoir-4.png',
            text: 'design'
        },
        {
            icon: 'Images/Iconoir-5.png',
            text: 'engineering'
        },
        {
            icon: 'Images/Iconoir-8.png',
            text: 'marketing'
        }
    ]
  return (
    <div className='overflow-x-scroll again'>
        <div className='flex w-fit gap-4'>
            <CarouselContent content={content[0]} />
            <CarouselContent content={content[1]} />
            <CarouselContent content={content[2]} />
            <CarouselContent content={content[3]} />
            <CarouselContent content={content[4]} />
            <CarouselContent content={content[5]} />
            <CarouselContent content={content[6]} />
            <CarouselContent content={content[7]} />
        </div>
    </div>
  )
}

export default Carousel