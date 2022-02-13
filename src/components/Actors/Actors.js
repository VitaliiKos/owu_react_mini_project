import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {actorsGetAll} from "../../store";
import {Actor} from "../Actor/Actor";
import css from './actors.module.css'

const Actors = ({movieId}) => {

    const {actors: {cast}, themeStatus} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actorsGetAll(movieId))
    }, [movieId])

    return (

        <div className={!themeStatus ? css.actorsList : css.actorsListLight}>
            {cast && cast.map(actor => <Actor key={actor.id} actor={actor}/>)}
        </div>
    );
};

export {Actors};