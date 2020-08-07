import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getShopList ,changeShop } from '../../../shop/store/action'
function PageTypeArticle(props) {
    let articleArr = props.props.props.ChannelPage.ProductArticles.filter(ProductArticle => ProductArticle.type == props.type.pageType)
    const handleShopData = (a)=>{
        props.fetchShopData(a)
    }  
    return (
        <div className='ProductArticle-wrapper'>
            {articleArr.map((article, i) => {
                return (
                    <Link to={`/shop/${article.shop}`} onClick={()=>{handleShopData(article.shop)}} className="article" key={article + i}  >
                        <div >
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
                    </Link>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchShopData(a){
            // dispatch(changeShop(a))
            dispatch(getShopList(a))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageTypeArticle)

