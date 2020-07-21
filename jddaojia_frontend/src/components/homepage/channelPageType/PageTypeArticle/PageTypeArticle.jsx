import React from 'react'
import './index.css'

export default function PageTypeArticle(props) {
    // console.log(props.props.props,'++++++++++++')
    let articleArr = props.props.props.ChannelPage.ProductArticles.filter(ProductArticle => ProductArticle.type == props.type.pageType)
    console.log(articleArr, props.type)
    return (
        <div className='ProductArticle-wrapper'>
            {articleArr.map((article, i) => {
                return (
                    <div className="article" key={article + i}>
                        <div className="article-img">
                            <img src={article.img} alt="" />
                        </div>
                        <div className="article-name">{article.name}</div>
                        {article.coupon ? <div className="articleCouponWrapper">
                            <div className="articleCoupon"> {article.coupon}</div>
                        </div> : null}
                        <div className="article-price">{article.price}</div>
                        <div className="articleShopInfo">
                            <div className="articleShopImg">
                                <img src={article.acticlesShop} alt="" />
                            </div>
                            <div className='articleShopAddressDeliveryFee'>
                                <div className="articleShopAddress">{article.shopAddress}</div>
                                <div className="articleDeliveryFee">{article.deliveryFee}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
