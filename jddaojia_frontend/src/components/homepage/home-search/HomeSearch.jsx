import React, { useReducer } from 'react';
import inputImg from '../../../assets/img/search.png'
import './index.css'
// import { SearchKey } from '../../../store/reducers';
export default function HomeSearch(){
    // const [] = useReducer(SearchKey,state)
    return (
        <div className='home-search'>
            <div className="search-input">
                <div className="input-img">
                    <img src={inputImg} alt=""/>
                </div>
                <input type="text" placeholder='极限冰点价'/>
            </div>
        </div>
    )
}