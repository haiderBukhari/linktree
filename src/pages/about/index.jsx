import React from 'react'
import Hero from '../../components/Hero'
import AboutMission from '../../components/AboutMission'

const index = () => {
    return (
        <div>
            <Hero />
            <AboutMission />
            <div className="text-5xl font-bold text-center bg-clip-text text-[#8497FC] max-md:text-3xl max-w-[1100px] mx-auto mb-3 mt-6 leading-20">
                Unlock Your Restaurant's Potential: Schedule Your EGO Demo Now!
            </div>
            <div className="justify-center px-8 py-4 text-base font-medium leading-5 text-center text-white bg-indigo-400 rounded w-[180px] m-auto">
                Book a Demo
            </div>
        </div>
    )
}

export default index
