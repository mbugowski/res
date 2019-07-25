import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
  <div className="header__nav-items">
    <NavLink to="/" activeClassName="active-nav-menu-item" exact={true}>All Orders</NavLink>
    <NavLink to="/new" activeClassName="active-nav-menu-item">New Order</NavLink>
  </div>
);

export default NavMenu;