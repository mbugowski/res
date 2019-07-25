import React from 'react';
import iterateObject from '../../../utils/iterateObject';

const DeliveryInfo = (props) => {

  return (
    <div>
      <h2>Delivery:</h2>
      { iterateObject(props.delivery) }
    </div>
  );
};

export default DeliveryInfo;
