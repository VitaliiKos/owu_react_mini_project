import React from 'react';
import {useSelector} from "react-redux";

import {movieImages} from "../../config";
import css from './detailCard.module.css'
import {Actors} from "../Actors/Actors";
import {StarRating} from "../StarsRating/StarsRating";

const MovieDetailCard = ({movieItem}) => {

    const {themeStatus} = useSelector(state => state['movieReducer']);

    const {
        genres,
        id,
        tagline,
        title,
        overview,
        movieItembudget,
        homepage,
        release_date,
        runtime,
        vote_average
    } = movieItem;

    const sectionStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${movieImages + movieItem.backdrop_path})`
    };

    return (
        <>
            <div className={css.detailCard} style={sectionStyle}>
                <div className={!themeStatus ? css.movieDetail : css.movieDetailLight}>

                    <div className={css.moviePoster}>
                        <img src={movieImages + movieItem.poster_path} alt=''/>
                    </div>

                    <div className={css.moviePosterDescription}>
                        <h1>{title}({release_date.split('-')[0]})</h1>
                        <div className={css.genreList}>
                            <h4>
                                {release_date}
                                {genres.map(moviegenre => ', ' + moviegenre.name)}
                                {' ' + Math.floor(runtime / 60)}h {runtime % 60}m
                            </h4>
                        </div>

                        <h4><em>{tagline}</em></h4>
                        <h2>Overview</h2>
                        <h4>{overview}</h4>

                        <h3>{movieItembudget}</h3>
                        <h3><a href={homepage}>{homepage}</a></h3>
                        <div className={css.movieMark}>
                            <h3>{vote_average} / 10</h3>
                        </div>
                        <div><StarRating/></div>
                    </div>
                </div>
            </div>
            <><Actors movieId={id}/></>
        </>
    );
};

export default MovieDetailCard;