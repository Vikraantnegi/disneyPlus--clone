import React from 'react'
import Brands from '../../Components/LandingPage/Brands/Brands'
import Carousel from '../../Components/LandingPage/Carousel/Carousel'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="disneyPlus__landing">
            <Carousel />
            <Brands />
        </div>
    )
}

export default LandingPage
