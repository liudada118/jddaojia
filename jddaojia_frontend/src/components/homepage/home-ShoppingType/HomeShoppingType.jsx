import React, { useEffect } from 'react';
import typebg from '../../../assets/img/typebg.jpg'
import type1 from '../../../assets/img/type1.png'
import type2 from '../../../assets/img/type2.png'
import type3 from '../../../assets/img/type3.png'
import type4 from '../../../assets/img/type4.png'
import type5 from '../../../assets/img/type5.png'
import type6 from '../../../assets/img/type6.png'
import type7 from '../../../assets/img/type7.png'
import type8 from '../../../assets/img/type8.png'
import type9 from '../../../assets/img/type9.png'
import type10 from '../../../assets/img/type10.png'
import type11 from '../../../assets/img/type11.png'
import type12 from '../../../assets/img/type12.png'
import type13 from '../../../assets/img/type14.png'
import type14 from '../../../assets/img/type14.png'
import type15 from '../../../assets/img/type15.png'
import type16 from '../../../assets/img/type16.png'
import type17 from '../../../assets/img/type17.png'
import type18 from '../../../assets/img/type18.png'
import type19 from '../../../assets/img/type19.png'
import './index.css'
import Swiper from 'swiper';
export default function HomeShoppingType() {
    useEffect(() => {
        new Swiper(".slider-shoppingType", {
            scrollbar: {
                el: '.shop-scrollbar',
            },
        })
    })
    return (

        <div className="homeShoppingType">
            <div className="type">
                <img src={typebg} alt="" />
            </div>
            <div className="slider-container slider-shoppingType">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" >
                        {/* <img src={swiper1} alt=""  /> */}
                        <div className="shoppingTypes">
                            <div className="shoppingType">
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type1} alt="" />
                                        <div className="shoppingName">超市</div>

                                    </div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type2} alt="" />
                                        <div className="shoppingName">买菜</div>

                                    </div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type3} alt="" />

                                    </div>
                                    <div className="shoppingName">鲜花礼品</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type4} alt="" />

                                    </div>
                                    <div className="shoppingName">送药上门</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type5} alt="" />

                                    </div>
                                    <div className="shoppingName">家居时尚</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type6} alt="" />

                                    </div>
                                    <div className="shoppingName">烘培蛋糕</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type7} alt="" />
                                        <div className="shoppingName">签到</div>

                                    </div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type8} alt="" />

                                    </div>
                                    <div className="shoppingName">鲜豆庄园</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type9} alt="" />

                                    </div>
                                    <div className="shoppingName">手机数码</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type10} alt="" />

                                    </div>
                                    <div className="shoppingName">0元专区</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-slide" >
                        {/* <img src={swiper2} alt="" /> */}

                        <div className="shoppingTypes">
                            <div className="shoppingType">
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type11} alt="" />

                                    </div>
                                    <div className="shoppingName">送药上门</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type12} alt="" />

                                    </div>
                                    <div className="shoppingName">家居时尚</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type13} alt="" />

                                    </div>
                                    <div className="shoppingName">大牌免运</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type14} alt="" />

                                    </div>
                                    <div className="shoppingName">每日领蛋</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type15} alt="" />

                                    </div>
                                    <div className="shoppingName">话费充值</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type16} alt="" />

                                    </div>
                                    <div className="shoppingName">手机数码</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type17} alt="" />

                                    </div>
                                    <div className="shoppingName">0元专区</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type18} alt="" />

                                    </div>
                                    <div className="shoppingName">跑腿代购</div>
                                </div>
                                <div className="shoppinginfo">
                                    <div className="shoppingTypeImg">
                                        <img src={type19} alt="" />

                                    </div>
                                    <div className="shoppingName">平台公示</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="shop-scrollbarWarpper">
                    <div className="swiper-scrollbar shop-scrollbar"></div>
                </div>
                {/* <span className='swipe'>{mySwiper?mySwiper.progress:null}</span> */}
            </div>


            {/* <div className="shoppingTypes">
                <div className="shoppingType">
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
me="shoppingName">超市</div>
  
                            <div classNa</div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
me="shoppingName">超市</div>
  
                            <div classNa</div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                    <div className="shoppinginfo">
                        <div className="shoppingTypeImg">
                            <img src={type1} alt=""/>
                            <div className="shoppingName">超市</div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div>

    )
}