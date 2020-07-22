import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
export default function ImgSwiper(props) {
    console.log(props)
    useEffect(() => {
        new Swiper(`.${props.swiperName}`, {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: `.${props.paginationName}`,
                type: 'fraction',
                clickable: true,
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + ' <span></span> ' + '<span class="' + totalClass + '"></span>';
                }
            },
        })
    }, [])
    return (
        <div className={`slider-container ${props.swiperName}`}>
            <div className="swiper-wrapper">
                {props.children.map((img,i) => {
                    return (<div className="swiper-slide" key={i}>
                            {img}
                    </div>)
                })}
            </div>
            <div className={`swiper-pagination ${props.paginationName}`}></div>
        </div>
    )
}