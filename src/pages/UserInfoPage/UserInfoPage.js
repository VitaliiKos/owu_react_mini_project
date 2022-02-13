import React from 'react';
import {useSelector} from "react-redux";

import css from './userInfoPage.module.css'
import {UserInfo} from "../../components";

const UserInfoPage = () => {
    const {themeStatus} = useSelector(state => state['movieReducer']);

    return (
        <div className={!themeStatus ? css.userPage : css.userPageLight}>
            <UserInfo/>
        </div>
    );
};

export {UserInfoPage};