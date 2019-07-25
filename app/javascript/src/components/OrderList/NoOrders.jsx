import React from 'react';
import { Link } from 'react-router-dom';

const NoOrders = () => {
  return (
    <React.Fragment>
      <p>
        No orders yet, please <Link to="/new">create new order</Link>.
      </p>
    </React.Fragment>
  );
}

export default NoOrders;
