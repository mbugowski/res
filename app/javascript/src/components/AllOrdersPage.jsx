import React from 'react';
import endpoints from 'src/api/endpoints';
import OrderList from 'src/components/OrderList/OrderList';
import NoOrders from 'src/components/OrderList/NoOrders';
import FilterOrders from 'src/components/FilterOrders';

export default class AllOrdersPage extends React.Component {
  state = {
    isLoading: true,
    orders: [],
    displayedOrders: [],
    selectName: "all",
    error: null
  }

  handleFilter = (selectedFilter) => {
    if(selectedFilter === '') {
      this.setState(() => ({
        displayedOrders: this.state.orders,
        selectName: 'all'
      }))
    } else {
      this.setState(() => ({
        displayedOrders: this.state.orders.filter(order => (order.status === selectedFilter)),
        selectName: selectedFilter,
      }));
    }
  }

  fetchOrders = () => {
    const url = `${endpoints.orders}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>
      this.setState({
        orders: data,
        displayedOrders: data,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchOrders();
  }

  render() {
    const { isLoading, orders, displayedOrders, selectName, error } = this.state;
    return (
      <React.Fragment>
        {
          !isLoading ?
            orders.length > 0 ?
              <div>
                <FilterOrders handleFilter={this.handleFilter} />
                <OrderList title={`${selectName} orders`}  orders={displayedOrders} />
              </div>
            : <NoOrders />
          : <h3>Loading...</h3>
        }
      </React.Fragment>
    );
  }
}
