import React from 'react'
import Services from '../../components/Services'
import Header from '../../components/HomeHeader'
import Hero from '../../components/Hero'
import Mission from '../../components/Mission'
import Footer from '../../components/Footer'
import Steps from '../../components/Steps'


const index = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Mission />
            <Steps/>
            <hr className="mt-20" />
            {/* <Testimonials/> */}
            <Footer />
        </div>
    )
}

export default index
