import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {famousActor} from "../../store";
import {UserInfoCard} from "../UserInfoCard/UserInfoCard";

const UserInfo = () => {

    const {myFamousActor} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(famousActor())
    }, [])

    return (
        <div>
            {myFamousActor && <UserInfoCard myFamousActor={myFamousActor}/>}
        </div>
    );
};

export {UserInfo};