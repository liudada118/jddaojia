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
                <img src={PanicBuying} alt=""/>
                <img src={PanicBuying1} alt=""/>
            <div className="homePanicBuyings">
                <div className="panicBuying"></div>
                <div className="panicBuying"></div>
                <div className="panicBuying"></div>
                <div className="panicBuying"></div>
            </div>
        </div>
    )
}
