import React, { useEffect, useState } from 'react'
import back from '../../../../assets/img/back.png'
import search from '../../../../assets/img/search.png'
import './index.css'
import Swiper from 'swiper';
import PageTypeArticle from '../PageTypeArticle/PageTypeArticle';
export default function PageTypeSearch(props) {

    useEffect(() => {
        new Swiper('.pageTypeSwiper', {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            direction: 'vertical',
        });
    })
    return (
            <div className='pageTypeSearch'>
                <div className="pageTypeBack">
                    <img src={back} alt="" />
                </div>
                <div className='pageTypeName'>{
                    props.props.ChannelPage.ProductName
                }</div>
                <div className="pageTypeInput">
                    <div className="pageTypeImg">
                        <img src={search} alt="" />
                    </div>
                    <div className="slider-container pageTypeSwiper">
                        <div className="swiper-wrapper">
                            {
                                props.props.ChannelPage.pageTypeInput.map((pageType, i) => {
                                    return (
                                        <div className="swiper-slide" key={pageType.name + i} >
                                            <span>{pageType.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
    )
}
