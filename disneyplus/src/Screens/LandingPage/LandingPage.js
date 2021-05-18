/* eslint-disable default-case */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import Brands from '../../Components/LandingPage/Brands/Brands'
import Carousel from '../../Components/LandingPage/Carousel/Carousel'
import MovieType from '../../Components/LandingPage/MovieType/MovieType'
import './LandingPage.css'
import {useSelector, useDispatch} from 'react-redux';
import db from '../../firebase';
import { UserName } from '../../features/user/userSlice'
import { setMovies, RecommendedList, NewDisneyList, OriginalList, TrendingList } from '../../features/movie/movieSlice'

const LandingPage = () => {

    const dispatch = useDispatch();
    const name = useSelector(UserName);

    let recommended = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies')
            .onSnapshot(snapshot => {
                snapshot.docs.map(record => {
                    switch(record.data().type){
                        case 'recommend':
                            recommended = [...recommended, {id: record.id, ...record.data()}];
                            break;

                        case 'new':
                            newDisney = [...newDisney, {id: record.id, ...record.data()}];
                            break;

                        case 'original':
                            original = [...original, {id: record.id, ...record.data()}];
                            break;

                        case 'trending':
                            trending = [...trending, {id: record.id, ...record.data()}];
                            break;
                    }
                })
                dispatch(setMovies({
                    recommended: recommended,
                    newDisney: newDisney,
                    original: original,
                    trending: trending
                }));            
            });
    }, [name])
  
    const recommendedMovies = useSelector(RecommendedList);
    const newDisneyMovies = useSelector(NewDisneyList);
    const originalMovies = useSelector(OriginalList);
    const trendingMovies = useSelector(TrendingList);

    let MovieList = [
        {
            heading: 'Recommended for You',
            movies: recommendedMovies
        },
        {
            heading: 'New Disney',
            movies: newDisneyMovies
        },
        {
            heading: 'Originals',
            movies: originalMovies
        },
        {
            heading: 'Trending',
            movies: trendingMovies
        }
    ];

    return (
        <div className="disneyPlus__landing">
            <Carousel />
            <Brands />
            {
                MovieList && MovieList.map((type, index) => {
                    return(
                        <MovieType key={index} heading={type.heading} movieList={type.movies} />
                    );
                })
            }            
        </div>
    )
}

export default LandingPage
