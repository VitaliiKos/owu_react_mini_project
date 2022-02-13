import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {actorsServices, famousActorServices, genresServices, moviesServices} from "../services";

const initialState = {
    movies: [],
    page: 1,
    genres: [],
    genre: null,
    total_pages: null,
    total_results: null,
    movieDetails: null,
    actors: [],
    myFamousActor: null,
    themeStatus: true,
    hover: 0,
    rating: 0
}

let getGenreId;
let getPage;

export const getByGenre = createAsyncThunk(
    'movieConstructor/getByGenre',
    async ({genre, page}, {rejectedWithValue}) => {
        getGenreId = genre
        getPage = page
        try {

            return await genresServices.getByGenre({page}, {genre})
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const genreGetAll = createAsyncThunk(
    'movieConstructor/genreGetAll',
    async (_, {rejectedWithValue}) => {
        try {
            return await genresServices.getAll()
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const movieInfo = createAsyncThunk(
    'movieConstructor/movieInfo',
    async (movieId, {rejectedWithValue}) => {
        try {
            return await moviesServices.getMovieById(movieId)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const actorsGetAll = createAsyncThunk(
    'movieConstructor/actorsGetAll',
    async (movieId, {rejectedWithValue}) => {
        try {
            return await actorsServices.getActors(movieId)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const famousActor = createAsyncThunk(
    'movieConstructor/famousActor',
    async (_, {rejectedWithValue}) => {
        try {
            return await famousActorServices.getFamousActor()
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieConstructor',
    initialState,
    reducers: {
        chooseTheme: (state) => {
            state.themeStatus = !state.themeStatus
        },
        starRating: (state, action) => {
            state.rating = action.payload
        },
        starHover: (state, action) => {
            state.hover = action.payload
        }
    },
    extraReducers: {
        [genreGetAll.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [genreGetAll.fulfilled]: (state, action) => {
            state.genres = action.payload.genres

        },
        [genreGetAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [getByGenre.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getByGenre.fulfilled]: (state, action) => {
            state.movies = action.payload.results
            state.genre = getGenreId
            state.page = getPage
            state.total_pages = action.payload.total_pages
            state.total_results = action.payload.total_results
        },
        [getByGenre.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [movieInfo.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [movieInfo.fulfilled]: (state, action) => {
            state.movieDetails = action.payload
        },
        [movieInfo.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [actorsGetAll.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [actorsGetAll.fulfilled]: (state, action) => {
            state.actors = action.payload
        },
        [actorsGetAll.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [famousActor.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [famousActor.fulfilled]: (state, action) => {
            state.myFamousActor = action.payload
        },
        [famousActor.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

    }
})

const movieReducer = movieSlice.reducer
export const {chooseTheme, starHover, starRating} = movieSlice.actions

export default movieReducer