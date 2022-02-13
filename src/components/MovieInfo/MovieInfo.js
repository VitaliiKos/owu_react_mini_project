import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {movieInfo} from "../../store";
import MovieDetailCard from "../MovieDetailCard/MovieDetailCard";

const MovieInfo = () => {
    const {id} = useParams();
    let dispatch = useDispatch();
    const {movieDetails} = useSelector(state => state['movieReducer'])

    useEffect(() => {
        dispatch(movieInfo(id))
    }, [id])

    return (
        <div>
            {movieDetails && <MovieDetailCard movieItem={{...movieDetails}}/>}

        </div>
    );
};

export {MovieInfo};