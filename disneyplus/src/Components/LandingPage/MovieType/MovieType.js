import React from 'react'
import { Link } from 'react-router-dom';
import './MovieType.css'

const MovieType = ({heading, movieList}) => {
    return (
        <div className="landing__movieList">
            <h4 className="movieList__heading">
                {heading}
            </h4>
            <div className="movieList__list">
                {
                    movieList.map((movie, index) => {
                        return(
                            <div key={index} className="movie__container">
                                <Link to={movie.link}>
                                    <img src={movie.logo} alt={`${movie.name}-logo`} className="movie__Logo" />
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default MovieType;
