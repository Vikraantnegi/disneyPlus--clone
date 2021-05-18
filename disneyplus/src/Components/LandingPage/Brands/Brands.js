import React from 'react'
import './Brands.css'
import {BrandLogo} from '../../../assets/data/BrandData';

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
