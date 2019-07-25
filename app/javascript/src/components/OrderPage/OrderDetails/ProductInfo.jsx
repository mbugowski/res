import React from 'react';

const ProductInfo = (props) => {
  return (
    <div>
      <h2>Product:</h2>
      <p>Name: {props.product}</p>
    </div>
  );
};

export default ProductInfo;
