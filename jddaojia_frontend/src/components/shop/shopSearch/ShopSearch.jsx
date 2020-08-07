import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
export default function ShopSearch(props) {
    // const {shop} =
    return (
        <ul className="shop-search">
            <li className="shop-search-wrap">
                <Link to='#' className='shop-home-search' >
                    <span>搜索店内商品，共4365件好物</span>
                </Link>
                <div className="search-iconfont">
                    <i className="iconfont">&#xe602;</i>
                </div>
            </li>
            <div className='shopGetCoupons'>
                <div className='leftGetCoupons ' ></div>
                <div className='GetCoupon'>领券</div>
                
                <div className='rightGetCoupons'></div>
            </div>
        </ul>
    )
}
