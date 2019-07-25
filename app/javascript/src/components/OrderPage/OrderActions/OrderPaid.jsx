import React from 'react';

const OrderPaid = (props) => {
  return (
    <div>
      {
        <button className="order-actions__button" onClick={props.handleOrderPaid}>Mark as paid</button>
      }
      </div>
  );
}
export default OrderPaid;
