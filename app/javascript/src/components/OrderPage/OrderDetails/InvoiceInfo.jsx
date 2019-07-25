import React from 'react';
import iterateObject from '../../../utils/iterateObject';

const InvoiceInfo = (props) => {
  return (
    <div>
      <h2>Invoice:</h2>
      { iterateObject(props.invoice) }
    </div>
  );
};

export default InvoiceInfo;