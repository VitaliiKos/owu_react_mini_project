import React from 'react';

import {movieImages} from "../../config";
import css from './userInfoCard.module.css'
import {useSelector} from "react-redux";

const UserInfoCard = ({myFamousActor}) => {

    const {themeStatus} = useSelector(state => state['movieReducer']);

    const {
        biography,
        birthday,
        homepage,
        known_for_department,
        name,
        place_of_birth,
        profile_path
    } = myFamousActor;

    return (
        <div>
            <div className={!themeStatus ? css.mainDetails : css.mainDetailsLight}>
                <div className={css.mainFoto}>
                    <img src={movieImages + profile_path} alt={name}/>
                </div>

                <div>
                    <h1>{name}</h1>
                    <h2>{birthday}</h2>
                    <h2>{place_of_birth}</h2>
                    <h2>{known_for_department}</h2>
                    <h2><a href={homepage}>{homepage}</a></h2>
                </div>
            </div>

            <div className={!themeStatus ? css.userDescription : css.userDescriptionLight}>
                <h3>{biography}</h3>
            </div>

        </div>
    );
};

export {UserInfoCard};