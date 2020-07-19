import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

export default function TabBar() {
    return (
        <div className='tabBar'>
            <Link to = '/' className='tab-item'><div className='tab'>
                <i className="iconfont">&#xe61f;</i>
                <span>首页</span>
            </div></Link>
            <Link to = '/find' className='tab-item'><div className='tab'>
                <i className="iconfont">&#xe60e;</i>
                <span>发现</span>
            </div></Link>
            <Link to = '/shoppingCart' className='tab-item'><div className='tab'>
                <i className="iconfont">&#xe661;</i>
                <span>购物车</span>
            </div></Link>
            <Link to = '/order' className='tab-item'><div className='tab'>
                <i className="iconfont">&#xe61e;</i>
                <span>订单</span>
            </div></Link>
            <Link to = '/mine' className='tab-item'><div className='tab'>
                <i className="iconfont">&#xe645;</i>
                <span>我的</span>
            </div></Link>
        </div>
    )
}