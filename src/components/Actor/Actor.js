import React from 'react';
import {useSelector} from "react-redux";

import {actorImages} from "../../config";
import css from './actor.module.css'

const Actor = ({actor}) => {

    const {themeStatus} = useSelector(state => state['movieReducer']);
    const {name, character, profile_path, known_for_department} = actor;

    return (

        <>
            {profile_path &&
            (<div className={!themeStatus ? css.actorDetail : css.actorDetailLight}>
                    <div className={css.actorPoster}>
                        <img src={actorImages + profile_path} alt={known_for_department}/>
                    </div>

                    <div className={css.actorPosterDescription}>
                        <div><h5>{name}</h5></div>
                        <div><h5>{character}</h5></div>

                    </div>
                </div>
            )
            }
        </>
    );
};

export {Actor};