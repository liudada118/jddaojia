import React from 'react';
import discount1 from '../../../assets/img/discount1.jpg'
import discount2 from '../../../assets/img/discount2.jpg'
import discount3 from '../../../assets/img/discount3.jpg'
import './index.css'
export default function HomeMember() {
    return (
        <div className="homeDiscount">
            <div className="homeDiscount-warpper">
                <div className="homeDiscount1"><img src={discount1} alt="" /></div>
                <div className="homeDiscount1"><img src={discount2} alt="" /></div>
                <div className="homeDiscount1"><img src={discount3} alt="" /></div>
            </div>
        </div>
    )
}