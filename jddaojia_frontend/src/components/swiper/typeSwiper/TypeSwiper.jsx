import React, { useEffect, useReducer } from 'react';

import Swiper from 'swiper';
export default function TypeSwiper(props) {
    useEffect(() => {
        new Swiper(`.${props.swiperName}`, {
            scrollbar: {
                el: `.${props.scrollbarName}`,
            },
        })

    })
    return (
        <div className={`slider-container ${props.swiperName}`}>
            <div className="swiper-wrapper">
                {props.children.map((type,i) => {
                    return (<div className="swiper-slide" key={i}>
                        {type}
                    </div>)
                })}
            </div>
            <div className="shop-scrollbarWarpper">
                <div className={`slider-container ${props.scrollbarName}`}></div>
            </div>
        </div>
    )
}