import React, { useReducer, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter, Route, Redirect, } from 'react-router-dom'
import Homepage from './components/homepage';
import Find from './components/find';
import Mine from './components/mine';
import ShoppingCart from './components/shoppingCart';
import Order from './components/order';
import ChannelPageType from './components/homepage/channelPageType/ChannelPageType';
import Shop from './components/shop/Shop';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        <Route exact path='/' component={Homepage} />
        <Route path='/find' component={Find} />
        <Route path='/mine' component={Mine} />
        <Route path='/shoppingCart' component={ShoppingCart} />
        <Route path='/order' component={Order} />
        <Route path='/channelPage/:type' component={ChannelPageType} />
        <Route path='/shop/:shop' component={Shop} />
        <Redirect from='/*' to='/' />
      </HashRouter>
    </Provider>
  );
}

export default App;
