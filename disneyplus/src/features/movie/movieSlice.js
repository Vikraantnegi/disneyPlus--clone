import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    recommended: null,
    newDisney: null,
    original: null,
    trending: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommended = action.payload.recommended;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    } ,
});

export const {setMovies} = movieSlice.actions;

export const RecommendedList = state => state.movie.recommended;
export const NewDisneyList = state => state.movie.newDisney;
export const OriginalList = state => state.movie.original;
export const TrendingList = state => state.movie.trending;

export default movieSlice.reducer;