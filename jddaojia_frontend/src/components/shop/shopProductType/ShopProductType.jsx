import React from 'react'
import './index.css'
import { connect } from 'react-redux'
function ShopProductType(props) {
    const { shop } = props
    return (
        <div className="shop-scroll-wrap">
            {shop.shopScrollWraps.map((shopScrollWrap, i) => {
                return (
                    <div key={i} className="shop-scroll-info">
                        <div className="shop-scroll-img">
                            <img src={shopScrollWrap.shopScrollImg} alt="" />
                        </div>
                        <div className="shop-scroll-name">{shopScrollWrap.shopScrollName}</div>
                    </div>
                )
            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopProductType)
