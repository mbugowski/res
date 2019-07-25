import React from 'react';

export default class OrderSent extends React.Component {
  state = { emptyInput: true };

  handleChangeInput = (e) => {
    this.setState({ emptyInput: e.target.value.trim().length === 0 })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleOrderSent}>
          <p>
            <label>Delivery number
              <input type="text" name="delivery_number" onChange={this.handleChangeInput} />
            </label>
          </p>
          <p>
            <input type="submit" className="order-actions__button" value="Mark as sent" disabled={this.state.emptyInput} />
          </p>
          </form>
      </div>
    );
  }
}