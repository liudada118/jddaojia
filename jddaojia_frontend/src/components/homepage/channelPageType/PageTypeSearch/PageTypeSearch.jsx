import React, { useEffect, useState } from 'react'
import back from '../../../../assets/img/back.png'
import search from '../../../../assets/img/search.png'
import './index.css'
import Swiper from 'swiper';
import PageTypeArticle from '../PageTypeArticle/PageTypeArticle';
import TextSwiper from '../../../swiper/textSwiper/TextSwiper'
export default function PageTypeSearch(props) {
    const [swiperName] = useState('pageTypeSwiper')
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
                    <TextSwiper swiperName={swiperName}>
                                {props.props.ChannelPage.pageTypeInput.map((pageType, i) => {
                                    return (
                                            <span key={i}>{pageType.name}</span>
                                    )
                                })}
                    </TextSwiper>
                </div>
            </div>
            
    )
}
