import React from 'react';
import NavMenu from 'src/components/NavMenu';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
      <h1 className="header__logo"><Link to="/">RES App</Link></h1>
      <NavMenu />
  </div>
);

export default Header;
