import React, { useEffect, useState } from 'react'
// import back from '../../../../assets/img/back.png'
// import search from '../../../../assets/img/search.png'
// import './index.css'
import Swiper from 'swiper';
// import PageTypeArticle from '../PageTypeArticle/PageTypeArticle';
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
