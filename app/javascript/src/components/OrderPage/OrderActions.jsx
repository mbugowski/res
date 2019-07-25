import React from 'react';
import OrderPaid from 'src/components/OrderPage/OrderActions/OrderPaid';
import OrderSent from 'src/components/OrderPage/OrderActions/OrderSent';

const OrderActions = (props) => {
  return (
    <React.Fragment>
      {
        props.order.status === "created" && <OrderPaid handleOrderPaid={props.handleOrderPaid} />
      }
      {
        props.order.status === "paid" && <OrderSent handleOrderSent={props.handleOrderSent} />
      }
    </React.Fragment>
  );
};

export default OrderActions;