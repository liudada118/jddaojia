import React, { useEffect } from 'react';
import Swiper from 'swiper';
import Icytype1 from '../../../assets/img/Icytype1.png'
import Icytype2 from '../../../assets/img/Icytype2.png'
import Icytype3 from '../../../assets/img/Icytype3.png'
import Icytype4 from '../../../assets/img/Icytype4.png'
import Icytype5 from '../../../assets/img/Icytype5.png'

import './index.css'
export default function IcyStrikesSwiper() {
    useEffect(() => {
        new Swiper('.icySwiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

    }, [])
    return (
        <div className="icySwiper">
        <div className="swiper-container icySwiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="IcyTypeImg">
                        <img src={Icytype1} alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="IcyTypeImg">
                        <img src={Icytype2} alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="IcyTypeImg">
                        <img src={Icytype3} alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="IcyTypeImg">
                        <img src={Icytype4} alt="" />
                    </div>
                </div>
                <div className="swiper-slide">
                    <div className="IcyTypeImg">
                        <img src={Icytype5} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}