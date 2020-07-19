import React from 'react';
import inputImg from '../../../assets/img/search.png'
import './index.css'
export default function HomeSearch(){
    return (
        <div className='home-search'>
            <div className="search-input">
                <div className="input-img">
                    <img src={inputImg} alt=""/>
                </div>
                <input type="text" placeholder='极限冰点价'/>
            </div>
            <div className='search-key'>
                <span>牛奶</span>
                <span>牛奶</span>
                <span>牛奶</span>
                <span>牛奶</span>
                <span>牛奶</span>
                <span>牛奶</span>
            </div>
        </div>
    )
}