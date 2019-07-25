import React from 'react'

export default (object) => {
  return (
    Object.keys(object).map(field => <p key={field}>{`${field.toUpperCase()}: ${object[field]}`}</p>)
  );
}