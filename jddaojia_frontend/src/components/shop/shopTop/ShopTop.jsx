import React from 'react'
import './index.css'
import { connect } from 'react-redux'
function ShopTop(props) {
    const { shop } = props
    return (
        <div className="shop-top">
            <div className="shop-info">
                <div className="shop-img">
                    <img src={shop.shopImg} alt="" />
                </div>
                <h2 className="shop-name">{shop.shopName}</h2>
                <p className="shop-delivery">{shop.shopDelivery}<span>{shop.shopDeliveryTime}</span> </p>
                <p className="shop-delivery1">{shop.shopDeliveryPrice}</p>
                <div className="shopVip">
                    <img src={shop.shopVip} alt="" />
                </div>
                <div className='shopFavorites'>
                    <i className='iconfont'>&#xe8ab;</i>
                </div>
            </div>
            <div className='couponAndTag'>
                <div className="shopCouponTitle">
                    {shop.shopCouponTitle}
                </div>
                <div className="shopCouponInfo">
                    {shop.shopCouponInfo}
                </div>
                <span className="shopCouponNumber">
                    {shop.shopCouponNumber}<i className='iconfont'>&#xe60b;</i>
                </span>
                
            </div>
        </div>
    )
}





const mapStateToProps = (state) => {
    return {
        shop: state.shop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopTop)
