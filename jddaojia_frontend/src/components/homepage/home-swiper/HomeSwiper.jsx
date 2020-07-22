import React, { useEffect, useState } from 'react';
import content from '../../../assets/img/content.jpg'
import './index.css'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import swiper1 from '../../../assets/img/swiper1.png'
import swiper2 from '../../../assets/img/swiper2.jpg'
import ImgSwiper from '../../swiper/imgSwiper/ImgSwiper';
import homeSwiperNumber from '../../../assets/img/homeSwiperNumber.png'
export default function HomeSwiper() {
    const [swiperName] = useState('slide-home')
    const [paginationName] = useState('swiper-paginationNumber')
    const [divName] = useState('homeSwiperImg')
    return (
        <div className="home-swiper">
            <div className='content'>
                <img src={content} alt="" />
            </div>
            <div className='swiper-number'>
                <img src={homeSwiperNumber} alt="" />
            </div>
            <ImgSwiper swiperName={swiperName} paginationName={paginationName}>
                <div className="homeSwiperImg">
                    <img src={swiper1} alt="" />
                </div>
                <div className="homeSwiperImg">
                    <img src={swiper2} alt="" />
                </div>
            </ImgSwiper>
        </div>
    )
}