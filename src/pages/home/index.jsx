import React from 'react'
import Services from '../../components/Services'
import Hero from '../../components/Hero'
import Mission from '../../components/Mission'
import Steps from '../../components/Steps'


const index = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Mission />
            <Steps/>
            <hr className="mt-20" />
        </div>
    )
}

export default index
