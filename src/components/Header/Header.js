import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import css from './header.module.css';
import './stules.css'
import {chooseTheme} from "../../store";

const Header = () => {

    const {themeStatus} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={!themeStatus ? css.header : css.headerLight}>
                <NavLink to="/movies">Home</NavLink>
                <NavLink to="/user">Profile</NavLink>

                <div>
                    <div className={css.toggleContainer}>
                        <span style={{color: !themeStatus ? "grey" : "yellow", fontSize: 18}}>☀︎</span>
                        <span className={css.toggle}>
                            <input
                                checked={!themeStatus}
                                onChange={() => dispatch(chooseTheme())}
                                id="checkbox"
                                className="checkbox"
                                type="checkbox"/>
                            <label htmlFor="checkbox"/>
                        </span>
                        <span style={{color: !themeStatus ? "aqua" : "grey", fontSize: 18}}>☾</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {Header};