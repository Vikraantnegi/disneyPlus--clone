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
                    movieList && movieList.map((movie) => {
                        return(
                            <div key={movie.id} className="movie__container">
                                <Link to={`/detail/` + movie.id}>
                                    <img src={movie.cardImg} alt={`${movie.title}-logo`} className="movie__Logo" />
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
