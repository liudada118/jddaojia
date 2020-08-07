import { axiosInstance } from './config'

export const getShopRequest = (shop) =>{
    return axiosInstance.get(shop)
}