import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Oooops... Nothing found.</h1>
    <p>You can return to <Link to="/">main page</Link></p>
  </div>
);

export default NotFound;
