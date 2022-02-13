import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './genreCard.module.css';
import {getByGenre} from "../../store";


const GenreCard = ({genreItem}) => {

    const {themeStatus} = useSelector(state => state['movieReducer'])

    const {name} = genreItem;
    const dispatch = useDispatch();

    return (

        <div className={!themeStatus ? css.genreButton : css.genreButtonLight}
             onClick={() => dispatch(getByGenre({genre: genreItem.id, page: 1}))}>
            <NavLink to={''}>
                <button>
                    {name}
                </button>
            </NavLink>
        </div>
    );
};

export {GenreCard};