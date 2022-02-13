import React from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './starsRating.module.css';
import {starHover, starRating} from "../../store";

const StarRating = () => {

    const {hover, rating} = useSelector(state => state['movieReducer']);
    const dispatch = useDispatch();

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;

                return (

                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? css.on : css.off}
                        onClick={() => dispatch(starRating(index))}
                        onMouseEnter={() => starHover(index)}
                        onMouseLeave={() => starHover(rating)}
                    >
                        <span className={css.starSize}><span className="star">&#9733;</span></span>
                    </button>
                );
            })}
        </div>
    );
};

export {StarRating};
