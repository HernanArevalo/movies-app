import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        isSaving: false,
        movieCharged: false,
        backgroundCharged: false,
        actualMovie: null,
        // actualMovie: {
        //     title: '',
        //     year: '',
        //     backdrop: '',
        //     genre1: '',
        //     genre2: '',
        //     story: '',
        //     tagline: '',
        //     poster: '',
        //     trailer: '',
        //     director: '',
        //     actor1: '',
        //     actor2: '',
        //     actor3: '',
            
        // },
    },
    reducers: {
        savingMovie: ( state ) =>{
            state.isSaving = true;
        },
        setMovie: (state, action ) => {
            state.actualMovie = action.payload;
            state.isSaving = false;

        },
    }
});


// Action creators are generated for each case reducer function
export const { 
                savingMovie,
                setMovie,


 } = movieSlice.actions;