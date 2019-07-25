import React from 'react';
import OrderInfo from 'src/components/OrderPage/OrderDetails/OrderInfo';
import ProductInfo from 'src/components/OrderPage/OrderDetails/ProductInfo';
import InvoiceInfo from 'src/components/OrderPage/OrderDetails/InvoiceInfo';
import DeliveryInfo from 'src/components/OrderPage/OrderDetails/DeliveryInfo';

class OrderDetails extends React.Component {
  render() {
    const { order, product, invoice, delivery} = this.props;
    return (
      <div className="order-details">
        <div>
          <OrderInfo order={order} />
          { product && <ProductInfo product={product} />}
          { invoice && <InvoiceInfo invoice={invoice} />}
          { delivery && <DeliveryInfo delivery={delivery} />}
        </div>
      </div>
    );
  }
}

export default OrderDetails;
