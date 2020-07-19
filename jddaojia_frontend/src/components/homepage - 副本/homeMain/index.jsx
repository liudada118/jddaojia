import React from 'react';
import content from '../../../assets/img/content.jpg'
import contentNext from '../../../assets/img/contentNext.gif'
import typebg from '../../../assets/img/typebg.jpg'
import discount1 from '../../../assets/img/discount1.jpg'
import discount2 from '../../../assets/img/discount2.jpg'
import discount3 from '../../../assets/img/discount3.jpg'
import IcyStrikes from '../../../assets/img/IcyStrikes.jpg'
import './index.css'
export default function HomeMain() {
    return (
        <div className='homeMain'>
            <div className='content'>
                <img src={content} alt="" />
            </div>
            <div className='contentNext'>
                <img src={contentNext} alt=""/>
            </div>
            <div className="type">
                <img src={typebg} alt=""/>
            </div>
            <div className="discount">
                <div className="discount1"><img src={discount1} alt=""/></div>
                <div className="discount1"><img src={discount2} alt=""/></div>
                <div className="discount1"><img src={discount3} alt=""/></div>
            </div>
            <div className='IcyStrikes'>
                <img src={IcyStrikes} alt=""/>
            </div>
        </div>
    )
}