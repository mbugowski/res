import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = (props) => {
  const { id, uid, customer, status} = props.order;
  return (
    <div className="order-list__item">
      <div>
        <p>UID: <strong>{uid}</strong></p>
        <p>Customer: <strong>{customer}</strong></p>
        <p>Status: <strong>{status}</strong></p>
      </div>
      <div className="order-list__action">
        <Link to={`/orders/${id}`} className="order-list__link">Show order</Link>
      </div>
    </div>
  );
};

export default OrderItem;
