import { FEHCH_SHOP_DATA, FOOD_NUMBER_ADD, FOOD_NUMBER_SUB } from "./contain"

export default (state = 'a', action) => {

    const { type, payload, key, name } = action
    switch (type) {
        case FEHCH_SHOP_DATA:
            return payload
        case FOOD_NUMBER_SUB:
            let arrr = { ...state }
            let arrr1 = arrr.foodList.filter((food) => food.type == key)
            let arrr2 = arrr1[0].food.filter((food) => food.name == name)
            arrr2[0].number -= 1
            return arrr
        case FOOD_NUMBER_ADD:
            let arr = { ...state }
            let arr1 = arr.foodList.filter((food) => food.type == key)
            let arr2 = arr1[0].food.filter((food) => food.name == name)
            arr2[0].number += 1
            return arr
        default:
            return state
    }
}