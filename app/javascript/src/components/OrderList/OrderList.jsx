import React from 'react';
import OrderItem from 'src/components/OrderList/OrderItem';

const OrderList = (props) => {
  return (
    <div className="order-list">
    { props.title && <h2 className="order-list__title">{props.title}</h2>}
      {
        props.orders.map((order) => <OrderItem key={order.uid} order={order} />)
      }
    </div>
  );
}

export default OrderList;
