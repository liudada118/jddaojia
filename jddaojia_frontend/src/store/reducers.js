// import { ACTION_SET_SHOPTYPE_DATA } from "./action"

// export function shoptypeData(state,action){
//     // console.log(action)
//     const{type , payload} = action
//     switch(type){
//         case ACTION_SET_SHOPTYPE_DATA :
//             return payload
//         default : 
//             return state
//     }
// }

import shopReducer from '../components/shop/store/recuder'
import { combineReducers } from 'redux'

export default combineReducers({
    shop : shopReducer
})