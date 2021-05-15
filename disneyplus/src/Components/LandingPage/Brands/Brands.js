import React from 'react'
import './Brands.css'

const BrandLogo = [
    {
        name: 'Disney',
        logo: '/assets/images/viewers-disney.png'
    },
    {
        name: 'Marvel',
        logo: '/assets/images/viewers-marvel.png'
    },
    {
        name: 'NationalTV',
        logo: '/assets/images/viewers-national.png'
    },
    {
        name: 'Pixar',
        logo: '/assets/images/viewers-pixar.png'
    },
    {
        name: 'StarWars',
        logo: '/assets/images/viewers-starwars.png'
    },
]

const Brands = () => {
    return (
        <div className="disney__brands">
            {BrandLogo.map((brand, index) => {
                return (
                    <div key={index} className="brandContainer">
                        <img src={brand.logo} alt={`${brand.name}-logo`} className="brandContainer__logo" />
                    </div>
                );
            })}
        </div>
    )
}

export default Brands
