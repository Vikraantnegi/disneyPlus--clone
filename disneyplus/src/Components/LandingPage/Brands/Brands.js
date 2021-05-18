import React from 'react'
import './Brands.css'

const BrandLogo = [
    {
        name: 'Disney',
        logo: '/assets/images/viewers-disney.png',
        video: '/assets/videos/1564674844-disney.mp4'
    },
    {
        name: 'Marvel',
        logo: '/assets/images/viewers-marvel.png',
        video: '/assets/videos/1564676115-marvel.mp4'
    },
    {
        name: 'NationalTV',
        logo: '/assets/images/viewers-national.png',
        video: '/assets/videos/1564676296-national-geographic.mp4'
    },
    {
        name: 'Pixar',
        logo: '/assets/images/viewers-pixar.png',
        video: '/assets/videos/1564676714-pixar.mp4'
    },
    {
        name: 'StarWars',
        logo: '/assets/images/viewers-starwars.png',
        video: '/assets/videos/1608229455-star-wars.mp4'
    },
]

const Brands = () => {
    return (
        <div className="disney__brands">
            {BrandLogo.map((brand, index) => {
                return (
                    <div key={index} className="brandContainer">
                        <img src={brand.logo} alt={`${brand.name}-logo`} className="brandContainer__logo" />
                        <video className="brandContainer__video" src={brand.video} muted autoPlay loop playsInline />
                    </div>
                );
            })}
        </div>
    )
}

export default Brands
