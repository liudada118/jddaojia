import React from 'react'
import './index.css'
import loading from '../../../assets/img/loading.gif'  
export default function Loading() {
    return (
        <div className='loading'>
            <div className="loadingImg">
                <img src={loading} alt=""/>
            </div>
        </div>
    )
}
