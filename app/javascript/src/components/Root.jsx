import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'src/components/Header';
import Routes from 'src/Routes';

const Root = () => (
  <BrowserRouter>
    <Header />
    <div className="container">
      <Routes />
    </div>
  </BrowserRouter>
);

export default Root;