import React from 'react'
import './index.css'
import { connect } from 'react-redux'
function ShopCoupon(props) {
    const { shop } = props
    return (
        <div className="shop-box-product">
            <div className="shop-floor-tit">
                <div className="shop-tit-icon"></div>
                <span className="shop-icon-info"><span className='shop-icon-info-big'>{shop.big}</span><span>{shop.small}</span></span>
            </div>
            <div className="shop-floor-tit-wrap">
                {
                    shop.shopFloorTitWrap.map((TitWrap,i) => {
                        return (
                            <div key={i} className="shop-index-coupon-items">
                                <div className="shop-index-coupon-item">
                                    <p>{TitWrap.DiscountPrice}</p>
                                    <p>{TitWrap.conditionPrice}</p>
                                </div>
                                <div className="shop-index-coupon-item">
                                    <p>{TitWrap.shopType}</p>
                                    <p>{TitWrap.type}</p>
                                    <p>{TitWrap.effectiveTime}</p>
                                </div>
                                <div className="shop-index-coupon-item">
                                    <div>已领取</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        shop: state.shop
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCoupon)
