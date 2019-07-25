import React from 'react';
import endpoints from 'src/api/endpoints';
import OrderSelect from 'src/components/NewOrderPage/OrderSelect';
import { withRouter } from 'react-router-dom';

class NewOrderPage extends React.Component {
  state = {
    isLoading: true,
    product: "",
    customer: "",
    productOptions: [],
    customerOptions: [],
    error: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { product, customer } = this.state;

    fetch(`${endpoints.orders}`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "product_id": product,
        "customer_id": customer
      })
     })
    .then(response => response.json())
    .then(data => {
      this.props.history.push(`/orders/${data.id}`)
    })
  }

  handleChangeProduct = (e) => this.setState({product: e.target.value});

  handleChangeCustomer = (e) => this.setState({customer: e.target.value});

  getOptions = () => {
    const url = `${endpoints.productAndCustomerOptions}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>
      this.setState({
        productOptions: data.products,
        customerOptions: data.customers,
        product: data.products[0].id,
        customer: data.customers[0].id,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount = () => {
    this.getOptions();
  }

  render() {
    const { isLoading, productOptions, customerOptions, product, customer, error} = this.state;
    return (
      <React.Fragment>
      {
        !isLoading ?
          <form onSubmit={this.handleSubmit}>
          {
            [
              {title: "Select Product", handle: this.handleChangeProduct, options: productOptions, selected: product},
              {title: "Select Customer", handle: this.handleChangeCustomer, options: customerOptions, selected: customer},
            ].map(item => <OrderSelect key={item.title} title={item.title} handle={item.handle} options={item.options} selected={item.selected} />)
          }
            <input type="submit" value="Submit" />
          </form>
          : <h3>Loading...</h3>
      }
      </React.Fragment>
    );
  }
}

export default withRouter(NewOrderPage);