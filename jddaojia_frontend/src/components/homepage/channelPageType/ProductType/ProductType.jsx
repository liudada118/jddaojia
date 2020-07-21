import React, { useState } from 'react'
import back from '../../../../assets/img/back.png'
import ProductType1 from '../../../../assets/img/ProductType1.png'
import ProductType2 from '../../../../assets/img/ProductType2.png'
import ProductType3 from '../../../../assets/img/ProductType3.png'
import ProductType4 from '../../../../assets/img/ProductType4.png'
import ProductType5 from '../../../../assets/img/ProductType5.png'
import ProductType6 from '../../../../assets/img/ProductType6.png'
import ProductType7 from '../../../../assets/img/ProductType7.png'
// import ProductType8 from '../../../../assets/img/ProductType8.png'
// import ProductType9 from '../../../../assets/img/ProductType9.png'
// import ProductType10 from '../../../../assets/img/ProductType10.png'
import './index.css'
import PageTypeArticle from '../PageTypeArticle/PageTypeArticle'
export default function ProductType(props) {
    const [pageType, setPageType] = useState('Featured')
    // const {props} = props 
    const changePageType = (type) => {
        setPageType({
            pageType: type
        })
    }
    console.log(props)
    return (
        <div>
            <div className='ProductTypes'>
                {props.props.ChannelPage.ProductTypes.map((ProductType, i) => {
                    return (
                        <div className="ProductType" onClick={() => {
                            changePageType(ProductType.type)
                        }} key={ProductType.name + i}>
                            <div className="ProductTypeImg"><img src={ProductType.img} alt="" /></div>
                            <div className="ProductTypeName">{ProductType.name}</div>
                        </div>
                    )
                })}
            </div>
            <PageTypeArticle type={pageType} props={props} />
        </div>
    )
}
