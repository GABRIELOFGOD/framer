import React from 'react'
import FeatureComp from './FeatureComp'
import { MdPivotTableChart } from 'react-icons/md'
import { RiTableAltFill } from 'react-icons/ri'
import { GiProgression } from 'react-icons/gi'
import { PiNotepadFill } from 'react-icons/pi'

const AboutFeature = () => {
    const feature = [
        {
            icon: <MdPivotTableChart />,
            text: 'Scalable hiring  solutions,  exclusively for startups.'
        },
        {
            icon: <RiTableAltFill />,
            text: 'Rapid hiring service to fill your open roles quickly.'
        },
        {
            icon: <PiNotepadFill />,
            text: 'One-off hires and longer term multi-hire projects.'
        },
        {
            icon: <GiProgression />,
            text: 'Fractional hires to develop strategy, build structure and create processes'
        }
    ]
  return (
    <div className='py-12 px-40 flex bg-dark'>
        <FeatureComp content={feature[0]} />
        <FeatureComp content={feature[1]} />
        <FeatureComp content={feature[2]} />
        <FeatureComp content={feature[3]} />
    </div>
  )
}

export default AboutFeature