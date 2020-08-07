import { getShopRequest } from "../../../api/request"
import { FEHCH_SHOP_DATA } from "./contain"

export const changeShop = (shop) =>{
    return{
        type : FEHCH_SHOP_DATA,
        payload : shop
    }
}
export const getShopList = (shop) =>{
    let getShopRequestd = ()=> getShopRequest(shop)
    return (dispatch) =>{
        getShopRequestd()
        .then(data => {
            dispatch(changeShop(data.data))
        }).catch(()=>{
            console.log('商店数据请求有误')
        })
    }
}