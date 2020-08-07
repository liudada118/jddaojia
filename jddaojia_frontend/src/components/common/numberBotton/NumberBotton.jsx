import React, { useState, useReducer } from 'react'
import { connect } from 'react-redux'
import './index.css'
import shopReducer from '../../shop/store/recuder'
import numberadd from '../../../assets/img/number.png'
import numbersub from '../../../assets/img/numbersub.png'
import { FOOD_NUMBER_ADD, FOOD_NUMBER_SUB } from '../../shop/store/contain'
function NumberBotton(props) {
    // const [shop, shopDispatch] = useReducer(shopReducer)
    const { shop, type, name,changeOrder } = props
    let arr = shop.foodList.filter((food) => food.type == type)
    let arr1 = arr[0].food.filter((food) => food.name == name)
    const [number, setNumber] = useState(arr1[0].number)
    const addFoodNumber = () => {
        props.addFoodNumber(type, name)
        let arr = shop.foodList.filter((food) => food.type == type)
        let arr1 = arr[0].food.filter((food) => food.name == name)
        setNumber(arr1[0].number)
    }
    const subFoodNumber = () => {
        props.subFoodNumber(type, name)
        let arr = shop.foodList.filter((food) => food.type == type)
        let arr1 = arr[0].food.filter((food) => food.name == name)
        setNumber(arr1[0].number)
    }
    return (
        <div  className='foodNumber'>
            {number > 0 ? <div onClick={() => subFoodNumber()} className='subFoodNumber'>
                <img src={numbersub} alt="" />
            </div> : null}
            {number > 0 ? <div className="foodnum">{number}</div> : null}

            <div onClick={() => { addFoodNumber();changeOrder() }} className="addFoodNumber">
                <img src={numberadd} alt="" />
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
        addFoodNumber(key, name) {
            dispatch({
                type: FOOD_NUMBER_ADD,
                key: key,
                name: name
            })
        },
        subFoodNumber(key, name) {
            dispatch({
                type: FOOD_NUMBER_SUB,
                key: key,
                name: name
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberBotton)
