import React from 'react'

const OrderSelect = (props) => {
  const { title, handle, options, selected } = props;
  return (
    <label>
      {title}
      <select value={selected} onChange={handle}>
        { options.map((item) =>
          <option
            key={`${item.id}${item.name}`}
            value={item.id}
          >
            {item.name}
          </option>)}
      </select>
    </label>
  );
}

export default OrderSelect;
