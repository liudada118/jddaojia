import React, { useEffect, useState } from 'react'
import './index.css'
import Warmalt from '../../assets/img/Warmalt.png'
import { Link } from 'react-router-dom'
import ShopTop from './shopTop/ShopTop'
import ShopSearch from './shopSearch/ShopSearch'
import ShopTabBar from './shopTabBar/ShopTabBar'
import ShopProductType from './shopProductType/ShopProductType'
import ShopBanner from './shopBanner/ShopBanner'
import ShopCoupon from './shopCoupon/ShopCoupon'
import ShopPanicBuying from './common/ShopPanicBuying/ShopPanicBuying'
import Loading from '../common/loading/Loading'
import { connect } from 'react-redux'
import ShopOrder from './common/order/ShopOrder'
function Shop(props) {
    const { shop } = props
    const [isOrder,setOrder] = useState(false)
    if (shop == 'a') {
        return <Loading />
    }
    const changeOrder = ()=>{
        setOrder(true)
    }
    return (
        <>
            {shop == '' ? <Loading /> :
                <div className='shop'>
                    <ShopTop />
                    <ShopSearch />
                    <ShopTabBar changeOrder={changeOrder} />
                </div>}
            {isOrder?<ShopOrder />:null}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        shop: state.shop
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)

