import React from 'react';
import address from '../../../assets/img/address.png'
import topImg from '../../../assets/img/topImg.gif'
import './index.css'
export default function HomeTop(){
    return(
        <div className="homeTop" >
            <div className="topImg">
                <img src={topImg} alt=""/>
            </div>
            
        </div>
    )
}