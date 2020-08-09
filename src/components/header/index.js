import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/png/header__logo.png'

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row row'>
          <div className='header__logo logo'>
            <Link to='/' className='logo__link'>
              <img src={logo} alt='' className='logo__img' />
            </Link>
          </div>
          <nav className='header__nav nav'>
            <ul className='nav__menu'>
              <li className='nav__items'>
                <Link to='/home' className='nav__links'>
                  Home
                </Link>
              </li>
              <li className='nav__items'>
                <Link to='/home' className='nav__links'>
                  About
                </Link>
              </li>
              <li className='nav__items'>
                <Link to='/contact' className='nav__links'>
                  Contact
                </Link>
              </li>
              <li className='nav__items'>
                <Link to='/buy' className='nav__links'>
                  Buy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
