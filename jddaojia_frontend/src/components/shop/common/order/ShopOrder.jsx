import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import NumberBotton from '../../../common/numberBotton/NumberBotton'
import './index.css'
const ShopOrder = (props) => {
    const { shop } = props
    const [allPrice, setAllPrice] = useState(0)
    useEffect(() => {
        let arr = shop.foodList.map((food) => {
            return (
                food.food.filter((foo) => foo.number > 0)
            )
        })
        let price = 0;
        for (let a of arr) {
            for (let b of a) {
                 price += JSON.parse(b.nowPrice)* JSON.parse(b.number)
                // let p = (c[1])
                // = p 
            }
        }
        setAllPrice(price);
    }, [shop])
    return (
        <div className="shop-orders">
        <div className='shop-order'>
            {/* {arr.map((a)=>{
                return(
                    <React.Fragment>
                        {a.map((b)=>{
                            return (
                                <div className='shopOrder'>
                                    <div className="shopOrderImg">
                                        <img src={b.img} alt=""/>
                                    </div>
                                    <div className="shopOrdername">
                                        {b.name}
                                    </div>
                                    <div className="shopOrderNowprice">
                                        {b.nowPrice}
                                    </div>
                                    <NumberBotton type={} />
                                </div>
                            )
                        })}
                    </React.Fragment>
                )
            })} */}
            <div className="shopcar">{allPrice ? allPrice : <span>空的</span>}</div>
            <div className={allPrice?'shoppay green': "shoppay"}>去结算</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopOrder)
