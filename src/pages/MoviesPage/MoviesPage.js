import React from 'react';
import {Outlet} from "react-router-dom";

import css from './moviePage.module.css'

const MoviesPage = () => {

    return (
        <div className={css.moviePage}>
            <div><Outlet/></div>
        </div>
    );
};

export {MoviesPage};