import React from 'react'

class FilterOrders extends React.Component {
  state = { selectedOption: '' }

  selectOption = (e) => {
    const option = e.target.value;
    this.setState(() => ({ selectedOption: option}));
    this.props.handleFilter(option);
  };

  render() {
    const options = ['', "created", "paid", "sent"];
    return (
      <div className="filtering-orders">
        <div className="filtering-orders__label">filter orders</div>
        <select value={this.state.selectedOption} onChange={this.selectOption} className="filtering-orders__select">
        { options.map((option) => <option key={option} value={option}>{option}</option>) }
        </select>
      </div>
    );

  }
}

export default FilterOrders;