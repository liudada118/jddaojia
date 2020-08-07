import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './index.css'
import number from '../../../assets/img/number.png'
import NumberBotton from '../../common/numberBotton/NumberBotton'
import ShopOrder from '../common/order/ShopOrder'
function ShopFood(props) {
    let arr = new Array(props.shop.foodList.length).fill(0)
    const [foodType, setFoodType] = useState(arr)
    const { shop, changeOrder } = props
    const changeFoodType = (i, j) => {
        console.log(i, j)
        arr[i] = j
        setFoodType(arr)
    }
    useEffect(() => {
        // arr[i] = j
        setFoodType(arr)
    }, [foodType])
    console.log(foodType)
    return (
        <div className='ShopFood'>
            <div className="shopFoodType">
                {shop.foodList.map((food, i) => {
                    return (
                        <div key={i} className='foodTypeName'>
                            {food.type}
                        </div>
                    )
                })}
            </div>
            <div className="shopFoodBigList">
                {shop.foodList.map((food, i) => {
                    console.log(food.foodtype)
                    return (
                        <div key={i} className="shopFoodSmallList">
                            <div className="foodSortTypes">
                                {food.foodtypes ? food.foodtypes.map((foodType, j) => {
                                    return (
                                        <div className="foodSortType" key={foodType + j} onClick={() => { changeFoodType(i, j) }}>{foodType}</div>
                                    )
                                }) : null}
                            </div>
                            <div className="foodsort">默认排序<i className='iconfont'>&#xe60b;</i></div>
                            <div className="freeShipping">免运费</div>
                            {food.food.map((foo, i) => {
                                return (
                                    <div key={i} className="shopShopFood">
                                        <div className="shopShopFood-img">
                                            <img src={foo.img} alt="" />
                                        </div>
                                        <div className="shopfooinfo">
                                            <div className="shopShopFood-name">
                                                {foo.name}
                                            </div>
                                            <div className="shopSales">
                                                <span>月售{foo.monthlySale}</span>
                                                <span>好评{foo.praise}%</span>
                                            </div>
                                            <div className='shopFoodDiscount'>
                                                <span>直降{(JSON.parse(foo.nowPrice) / JSON.parse(foo.BeforePrice) * 10).toFixed(2)}折</span>
                                            </div>
                                            <div className="shopShopFood-nowPrice">
                                                ￥{foo.nowPrice}
                                            </div>
                                            <div className="shopShopFood-BeforePrice">
                                                ￥{foo.BeforePrice}
                                            </div>
                                        </div>
                                        <NumberBotton changeOrder={changeOrder} type={food.type} name={foo.name} />

                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            {/* <ShopOrder /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopFood)
