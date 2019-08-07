/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

  return (
    <nav>
      <ul className='mini-nav'>
        <li className='hamburger-button'><i className="fa fa-bars"></i></li>
        <li className='nav-search'><div className="input-icon-wrap">
          <span className="input-icon"><span className="fa fa-search"></span></span>
          <input type="text" className="input-with-icon" />
        </div></li>
        <li><FontAwesomeIcon icon={ faUser }/></li>
        <li>Account</li>
        <li><FontAwesomeIcon icon={ faShoppingCart }/></li>
        <li>Cart</li>
      </ul>
      <ul className='title'>
        <h1>LOGOTYPE</h1>
      </ul>
      <ul className='main-nav'>
        <li><a>Shop <i className="arrow down"></i></a></li>
        <li><a>Nav Item <i className="arrow down"></i></a></li>
        <li><a>Nav Item <i className="arrow down"></i></a></li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav