import React from 'react'
import PanicBuying from '../../../assets/img/PanicBuying.jpg'
import PanicBuying1 from '../../../assets/img/PanicBuying1.jpg'
import PanicBuying2 from '../../../assets/img/PanicBuying2.png'
import PanicBuying3 from '../../../assets/img/PanicBuying3.png'
import PanicBuying4 from '../../../assets/img/PanicBuying4.png'
import PanicBuying5 from '../../../assets/img/PanicBuying5.jpg'
import './index.css'
export default function HomePopular() {
    return (
        <div className='homePopular'>
            <div className="homePopularTypes">
                <div className="homePopularType">
                    <img src={PanicBuying} alt="" />
                </div>
                <div className="homePopularType">
                    <img src={PanicBuying1} alt="" />
                </div>
            </div>
            <div className="homePanicBuyings">
                <div className="panicBuying">
                    <img src={PanicBuying2} alt="" />
                </div>
                <div className="panicBuying">
                    <img src={PanicBuying3} alt="" />
                </div>
                <div className="panicBuying">
                    <img src={PanicBuying4} alt="" />
                </div>
                <div className="panicBuying">
                    <img src={PanicBuying5} alt="" />
                </div>
            </div>
        </div>
    )
}
