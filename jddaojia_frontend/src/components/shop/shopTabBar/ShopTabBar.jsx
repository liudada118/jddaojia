import React, { useState } from 'react'
import './index.css'
import ShopBanner from '../shopBanner/ShopBanner'
import ShopProductType from '../shopProductType/ShopProductType'
import ShopCoupon from '../shopCoupon/ShopCoupon'
import ShopPanicBuying from '../common/ShopPanicBuying/ShopPanicBuying'
import { connect } from 'react-redux'
import  ShopFood  from '../ShopFood/ShopFood'
function ShopTabBar(props) { 
    const { shop,changeOrder } = props
    const [key, setKey] = useState(0)
    const [type, setType] = useState('homePage')
    const chooseType = (i, type) => {
        setKey(i)
        setType({ type: type })
    }
    return (
        <>
            <div className="shop-tab-bar-list">
                {shop.foodTypes.map((foodType, i) => {
                    return (
                        <span className={key == i ? 'bottomLight' : null} key={i} onClick={() => {
                            chooseType(i, foodType.type)
                        }}>{foodType.name}</span>
                    )
                })}
            </div>
            {key == 0 ? <> 
            <ShopProductType  type = {type} />
            <ShopBanner type = {type} />
            <ShopCoupon  type = {type}  />
            <ShopPanicBuying  type = {type}      /> </>:null}
           {key == 1 ? <>
            <ShopFood changeOrder={changeOrder}/>
            </>:null}
            {key == 2 ? <> 
            <ShopPanicBuying   /> </>:null}
        </>
    )
}




const mapStateToProps = (state) => {
    return {
        shop : state.shop
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopTabBar)
