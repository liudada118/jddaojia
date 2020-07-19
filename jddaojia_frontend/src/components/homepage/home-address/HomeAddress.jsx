import React from 'react';
import topImg from '../../../assets/img/topImg.gif'
import './index.css'
import HomeSearch from '../home-search/HomeSearch';
import addressImg from '../../../assets/img/address.png'
import selector from '../../../assets/img/selector.png'
import information from '../../../assets/img/information.png'

export default function HomeAddress() {
    return (
        <div className='top'>
            <div className="topImg">
                <img src={topImg} alt="" />
            </div>
            <div className="address">
                <div className="addressInfo">
                    <div className="address-img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="addressname">东华理工大学</div>
                    <div className="selector">
                        <img src={selector} alt="" />
                    </div>
                </div>
                <div className="new">
                    <img src={information} alt="" />
                </div>
            </div>
            <HomeSearch />
        </div>
    )
}