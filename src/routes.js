import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Product from './pages/Product';

import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route
        path="/products/category/:category_id"
        exact
        component={Category}
      />
      <Route path="/product/:product_id" component={Product} />
      <Route path="/cart" component={Cart} />
      <Route path="/account" component={Account} />
    </Switch>
  );
}
