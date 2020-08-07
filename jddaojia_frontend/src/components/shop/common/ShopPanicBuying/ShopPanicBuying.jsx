import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { connect } from 'react-redux'
function ShopPanicBuying(props) {
    const { shop } = props
    return (
        <div className='ShopPanicBuying'>
            {shop.ShopPanicBuying.map((buy,i) => {
                return (
                    <React.Fragment key = {i}>
                    <div className="ShopPanicInfo">
                        <div></div>
                        <span className="ShopPanicInfo">{buy.name}</span>
                        <Link to='#'>全部商品</Link>
                    </div>
                    <div className="ShopPanicFoods">
                        {buy.food.map((foo,i) => {
                            return (
                                <div key={i} className="ShopPanicFood">
                                    <div className="shopPanicImg">
                                        <img src={foo.img} alt="" />
                                    </div>
                                    <div className="ShopPanicFoodInfo">{foo.name}</div>
                            <div className="ShopPanicFoodPrice">{foo.nowPrice}</div>
                            <div className="ShopPanicFoodBeforePrice">{foo.BeforePrice}</div>
                                    <div className="ShopPanicFoodNumber"></div>
                                </div>
                            )
                        })}
                    </div>
                    </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopPanicBuying)
