import React from 'react';
import iterateObject from 'src/utils/iterateObject'

const OrderInfo = (props) => {
  return (
    <div>
    <h2>Order:</h2>
    {iterateObject(props.order)}
    </div>
  );
}

export default OrderInfo;