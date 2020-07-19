import React, { Component } from 'react';
// import HomeMain from './homeMain';
// import HomeTop from './homeTop';
import './index.css'
import HomeCoupon from './home- coupon/HomeCoupon';
import HomeAddress from './home-address/HomeAddress';
import HomeSearch from './home-search/HomeSearch';
import HomeSwiper from './home-swiper/HomeSwiper';
import HomeShoppingType from './home-ShoppingType/HomeShoppingType';
import HomeMember from './home-member/HomeMember';
import HomeDiscount from './home-discount/HomeDiscount';
import HomeIcyStrikes from './home-IcyStrikes/HomeIcyStrikes';
import TabBar from '../common/tabBar';
import SearchKey from './Search-key/SearchKey';
import IcyStrikesSwiper from './IcyStrikesSwiper/IcyStrikesSwiper';
export default function Homepage() {
    return (
        <div className='home'>
            <div className="homeTop" >
                <HomeAddress />
                {/* <HomeSearch /> */}
            </div>
            <div className='homeMain'>
                <SearchKey />
                <HomeSwiper />
                <HomeDiscount />
                <HomeShoppingType />
                <HomeMember />
                {/* <HomeCoupon /> */}
                <div className="icy">
                    <HomeIcyStrikes />
                    <IcyStrikesSwiper />
                </div>
                <TabBar />
            </div>
        </div>
    )
}