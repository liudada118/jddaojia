import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';
export default function TextSwiper(props) {

    useEffect(() => {
        new Swiper(`.${props.swiperName}`, {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            direction: 'vertical',
        });
    })
    return (
            <div className={`slider-container ${props.swiperName}`}>
                <div className="swiper-wrapper">
                    {
                        props.children.map((text, i) => {
                            return (
                                <div className="swiper-slide" key={i} >
                                    {text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}
