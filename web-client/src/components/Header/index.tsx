import React from 'react';

import logo from './logo.svg';
import './index.css';
import { Link } from 'react-router-dom';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <nav>
        <Link to={'/'}>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </nav>
      <h1 className="header__title">App for project on React + Django</h1>
    </header>
  );
};

export default Header;
