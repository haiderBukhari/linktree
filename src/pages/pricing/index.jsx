import React from 'react'
import Header from '../../components/HomeHeader'
import PricingHeader from '../../components/pricingHeader'
import PricingPlan from '../../components/plans'
import Footer from '../../components/Footer'


const index = () => {
    return (
        <div>
            <Header />
            <PricingHeader/>
            <PricingPlan/>
            <Footer />
        </div>
    )
}

export default index
