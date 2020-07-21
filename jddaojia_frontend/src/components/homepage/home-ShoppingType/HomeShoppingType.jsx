import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom'
import typebg from '../../../assets/img/typebg.jpg'
import type1 from '../../../assets/img/type1.png'
import type2 from '../../../assets/img/type2.png'
import type3 from '../../../assets/img/type3.png'
import type4 from '../../../assets/img/type4.png'
import type5 from '../../../assets/img/type5.png'
import type6 from '../../../assets/img/type6.png'
import type7 from '../../../assets/img/type7.png'
import type8 from '../../../assets/img/type8.png'
import type9 from '../../../assets/img/type9.png'
import type10 from '../../../assets/img/type10.png'
import type11 from '../../../assets/img/type11.png'
import type12 from '../../../assets/img/type12.png'
import type13 from '../../../assets/img/type14.png'
import type14 from '../../../assets/img/type14.png'
import type15 from '../../../assets/img/type15.png'
import type16 from '../../../assets/img/type16.png'
import type17 from '../../../assets/img/type17.png'
import type18 from '../../../assets/img/type18.png'
import type19 from '../../../assets/img/type19.png'
import './index.css'
import Swiper from 'swiper';
import { useState } from 'react';
import { shoptypeData } from '../../../store/reducers';
export default function HomeShoppingType() {
    // console.log(props)
    const [ShoppingType1] = useState([{
        key: 1,
        link: '/channelPage/supermarket',
        name: '超市',
        img: type1
    }, {
        key: 2,
        link: '/channelPage/grocery',
        name: '买菜',
        img: type2
    }, {
        key: 3,
        link: '/channelPage/flowerGift',
        name: '鲜花礼品',
        img: type3
    }, {
        key: 4,
        link: '/channelPage/delivery',
        name: '送药上门',
        img: type4
    }, {
        key: 5,
        link: '/channelPage/furniture ',
        name: '家具时尚',
        img: type5
    }, {
        key: 6,
        link: '/channelPage/cake',
        name: '烘培蛋糕',
        img: type6
    }, {
        key: 7,
        link: '/channelPage/sign ',
        name: '签到',
        img: type7
    }, {
        key: 8,
        link: '/channelPage/freshBean',
        name: '鲜豆庄园',
        img: type8
    }, {
        key: 9,
        link: '/channelPage/phone',
        name: '手机',
        img: type9
    }, {
        key: 10,
        link: '/channelPage/free',
        name: '0元专区',
        img: type10
    },])
    const [ShoppingType2] = useState([{
        key: 11,
        link: '/channelPage/delivery',
        name: '送药上门',
        img: type11
    }, {
        key: 12,
        link: '/channelPage/furniture',
        name: '家具时尚',
        img: type12
    }, {
        key: 13,
        link: '/channelPage/freeShipping',
        name: '大牌免运',
        img: type13
    }, {
        key: 14,
        link: '/channelPage/dailyPick',
        name: '每日领蛋',
        img: type14
    }, {
        key: 15,
        link: '/channelPage/recharge',
        name: '话费充值',
        img: type15
    }, {
        key: 16,
        link: '/channelPage/phone',
        name: '手机数码',
        img: type16
    }, {
        key: 17,
        link: '/channelPage/free',
        name: '0元专区',
        img: type17
    }, {
        key: 18,
        link: '/channelPage/errandshop',
        name: '跑腿代购',
        img: type18
    }, {
        key: 19,
        link: '/channelPage/announcement',
        name: '平台公示',
        img: type19
    }])
    
    
    useEffect(() => {
        new Swiper(".slider-shoppingType", {
            scrollbar: {
                el: '.shop-scrollbar',
            },
        })

    })
    return (

        <div className="homeShoppingType">
            <div className="type">
                <img src={typebg} alt="" />
            </div>
            <div className="slider-container slider-shoppingType">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" >
                        <div className="shoppingTypes">
                            <div className="shoppingType">
                                {ShoppingType1.map((ShoppingType) => {
                                    return (
                                        <Link  to={ShoppingType.link} className="shoppinginfo" key={ShoppingType.key}>
                                            <div>
                                                <div className="shoppingTypeImg">
                                                    <img src={ShoppingType.img} alt="" />
                                                </div>
                                                <div className="shoppingName">{ShoppingType.name}</div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                    <div className="swiper-slide" >
                        <div className="shoppingTypes">
                            <div className="shoppingType">
                            {ShoppingType2.map((ShoppingType) => {
                                    return (
                                        <Link to={ShoppingType.link} className="shoppinginfo" key={ShoppingType.key}    >
                                            <div>
                                                <div className="shoppingTypeImg">
                                                    <img src={ShoppingType.img} alt="" />
                                                </div>
                                                <div className="shoppingName">{ShoppingType.name}</div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="shop-scrollbarWarpper">
                    <div className="swiper-scrollbar shop-scrollbar"></div>
                </div>
            </div>
        </div>

    )
}