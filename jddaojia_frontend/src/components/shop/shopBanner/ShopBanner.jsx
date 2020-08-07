import React from 'react'
import './index.css'
import { connect } from 'react-redux'
function ShopBanner(props) {
    const {shop} = props
    return (
        <div className="shop-box-banner">
        <div className="shop-banner-img">
            <img src={shop.shopBoxBanner[0].img} alt="" />
        </div>
        <div className="shop-banner-img">
            <img src={shop.shopBoxBanner[1].img} alt="" />
        </div>
    </div>
    )
}





const mapStateToProps = (state) => {
    return {
        shop : state.shop
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopBanner)

