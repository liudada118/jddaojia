import React, { useEffect, useState } from 'react';
import content from '../../../assets/img/content.jpg'
import './index.css'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import swiper1 from '../../../assets/img/swiper1.png'
import swiper2 from '../../../assets/img/swiper2.jpg'
import homeSwiperNumber from '../../../assets/img/homeSwiperNumber.png'
// import  from 'react';
// import swiper1 from '../../../assets/img/swiper1'
export default function HomeSwiper() {
    useEffect(() => {
        new Swiper(".slide-home", {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-paginationNumber',
                type: 'fraction',
                clickable: true,

                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' + ' <span></span> ' + '<span class="' + totalClass + '"></span>';
                }
            },
        })
    }, [])
    return (
        <div className="home-swiper">
            <div className='content'>
                <img src={content} alt="" />
            </div>
            <div className='swiper-number'>
                <img src={homeSwiperNumber} alt="" />
            </div>
            <div className="slider-container slide-home">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" >
                        <div className="homeSwiperImg">
                            <img src={swiper1} alt="" />
                        </div>
                    </div>
                    <div className="swiper-slide" >
                        <div className="homeSwiperImg">
                            <img src={swiper2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination swiper-paginationNumber"></div>
            </div>
        </div>
    )
}