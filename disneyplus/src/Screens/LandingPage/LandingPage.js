import React from 'react'
import Brands from '../../Components/LandingPage/Brands/Brands'
import Carousel from '../../Components/LandingPage/Carousel/Carousel'
import MovieType from '../../Components/LandingPage/MovieType/MovieType'
import './LandingPage.css'
import {MovieList} from '../../assets/data/MovieList';

const LandingPage = () => {
    return (
        <div className="disneyPlus__landing">
            <Carousel />
            <Brands />
            {
                MovieList.map((type, index) => {
                    return(
                        <MovieType key={index} heading={type.heading} movieList={type.movies} />
                    );
                })
            }            
        </div>
    )
}

export default LandingPage
