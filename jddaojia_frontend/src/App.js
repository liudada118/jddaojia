import React, { useReducer, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, } from 'react-router-dom'
import Homepage from './components/homepage';
import Find from './components/find';
import Mine from './components/mine';
import ShoppingCart from './components/shoppingCart';
import Order from './components/order';
import ChannelPageType from './components/homepage/channelPageType/ChannelPageType';


function App() {

  return (
    <BrowserRouter>
      <Route exact path='/' component={Homepage} />
      <Route path='/find' component={Find} />
      <Route path='/mine' component={Mine} />
      <Route path='/shoppingCart' component = {ShoppingCart} />
      <Route path = '/order' component = {Order} />
      <Route path = '/channelPage/:type'  component = {ChannelPageType} />
      <Redirect from = '/*' to = '/' />
    </BrowserRouter>
  );
}

export default App;
