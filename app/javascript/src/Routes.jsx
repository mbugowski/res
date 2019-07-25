import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllOrdersPage from 'src/components/AllOrdersPage';
import NewOrderPage from 'src/components/NewOrderPage/NewOrderPage';
import OrderPage from 'src/components/OrderPage/OrderPage';
import NotFound from 'src/components/NotFound';

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" component={AllOrdersPage} exact={true} />
      <Route path="/orders/:id" component={OrderPage} />
      <Route path="/new" component={NewOrderPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;