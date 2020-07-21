import React from 'react';
import topImg from '../../../assets/img/topImg.gif'
import './index.css'
import HomeSearch from '../home-search/HomeSearch';
import addressImg from '../../../assets/img/address.png'
import selector from '../../../assets/img/selector.png'
import information from '../../../assets/img/information.png'

export default function HomeAddress() {
    return (
        <div className='addressTop'>
            <div className="addressTopImg">
                <img src={topImg} alt="" />
            </div>
            <div className="homeAddress">
                <div className="homeAddressInfo">
                    <div className="homeAddress-img">
                        <img src={addressImg} alt="" />
                    </div>
                    <div className="homeAddressname">东华理工大学</div>
                    <div className="homeSelector">
                        <img src={selector} alt="" />
                    </div>
                </div>
                <div className="homeNew">
                    <img src={information} alt="" />
                </div>
            </div>
            <HomeSearch />
        </div>
    )
}