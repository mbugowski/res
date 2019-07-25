import React from 'react';
import endpoints from 'src/api/endpoints';
import OrderDetails from 'src/components/OrderPage/OrderDetails'
import OrderActions from 'src/components/OrderPage/OrderActions'
import { Link } from 'react-router-dom';

export default class OrderPage extends React.Component  {
  state = {
    isLoading: true,
    order: null,
    product: null,
    invoice: null,
    delivery: null,
    error: null
  };

  handleOrderPaid = (e) => {
    e.preventDefault();
    const order = this.state.order;
    this.setState(() => ({isLoading: true}));
    fetch(`${endpoints.orders}/${order.id}/pay`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      const { order, invoice, delivery } = data;
      this.setState(() => ({ order, invoice, delivery, isLoading: false }));
    })
    .catch(error => console.log(error));
  }

  handleOrderSent = (e) => {
    e.preventDefault();
    const delivery  = this.state.delivery;
    const deliveryNumber = e.target.elements.delivery_number.value.trim();
    fetch(`${endpoints.deliveries}/${delivery.id}`, {
      method: 'put',
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify({
        delivery: {
          number: deliveryNumber
        }
      }),
    })
    .then(response => response.json())
    .then(data => {
      const { order, delivery } = data;
      this.setState(() => ({ order, delivery, isLoading: false}));
    })
    .catch(error => console.log(error));
  }

  fetchOrder = () => {
    const url = `${endpoints.orders}/${this.props.match.params.id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const { order, product, invoice, delivery } = data;

      this.setState({
        order,
        product,
        invoice,
        delivery,
        isLoading: false,
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.fetchOrder();
  }

  render() {
    const { isLoading, order, product, invoice, delivery, error } = this.state;
    return (

      <React.Fragment>
        <React.Fragment>
          <div>
            <Link to="/">{'< back to list'}</Link>
          </div>
        </React.Fragment>
        <React.Fragment>
        {
          !isLoading ?
          <div className="order-page">
            <OrderDetails
              order={order}
              delivery={delivery}
              product={product}
              invoice={invoice}
            />
            <OrderActions
              order={order}
              handleOrderPaid={this.handleOrderPaid}
              handleOrderSent={this.handleOrderSent}
              delivery={delivery}
            />
            </div>
          : <h3>Loading...</h3>
        }
        </React.Fragment>
      </React.Fragment>
    );
  }
}