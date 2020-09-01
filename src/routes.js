import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Account from './pages/Account';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/:category" component={Category} />
      <Route path="/cart" component={Cart} />
      <Route path="/account" component={Account} />
    </Switch>
  );
}
