import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getByGenre} from "../../store";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './movieList.module.css'

const MovieList = () => {

    const {movies, total_pages, page, genre, themeStatus} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getByGenre({page, genre}))
    }, [page, genre])

    const sectionStyle = {color: 'red',};

    return (

        <div className={css.movieListContainer}>
            <div className={css.movieList}>
                {movies.map(moviesItem => <MovieListCard key={moviesItem.id} moviesItem={moviesItem}/>)}
            </div>

            <div className={css.movieListPage}>
                <div style={sectionStyle}><h3>Page: {page}</h3></div>

                <div className={!themeStatus ? css.pageButtons : css.pageButtonsLights}>

                    <div onClick={() => dispatch(getByGenre({page: 1, genre}))}>
                        <button>Page 1</button>
                    </div>

                    {page > 1 && <div>
                        <button onClick={() =>
                            dispatch(getByGenre({page: ((page - 1) > 1 ? page - 1 : 1), genre}))
                        }>Prev
                        </button>
                    </div>
                    }
                    {page <= total_pages && <div>
                        <button onClick={() =>
                            dispatch(getByGenre({page: page + 1, genre}))
                        }>Next
                        </button>
                    </div>
                    }
                </div>
            </div>

        </div>
    );
};

export {MovieList};