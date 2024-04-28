import React from 'react'
import Services from '../../components/Services'
import Hero from '../../components/Hero'
import Mission from '../../components/Mission'
import Steps from '../../components/Steps'


const index = () => {
    return (
        <div>
            <Hero Image="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9ab8f0d15a2c4d514d27ff20e4e1e6bb0befb22e5bd8a6c927e754701e7b9a2f?apiKey=cf358c329e0d49a792d02d32277323ef&" heading="Home" para1="Revolutionizing Restaurant" para2="Management with EGO"/>
            <Services />
            <Mission />
            <Steps/>
            <hr className="mt-20" />
        </div>
    )
}

export default index
