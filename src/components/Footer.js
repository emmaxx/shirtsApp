import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal, faCcMastercard, faCcVisa, faCcAmex } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <nav>
          <ul className='nav-info'>
            <hr />
            <div className='foot-nav' tabindex='0'><h3>Shop</h3></div>
            <li className='foot-item'>footer item 1</li>
            <li className='foot-item'>footer item 2</li>
            <li className='foot-item'>footer item 3</li>
            <li className='foot-item'>footer item 4</li>
          </ul>
          <ul className='nav-info'>
            <hr />
            <div className='foot-nav' tabindex='0'><h3>About</h3></div>
            <li className='foot-item'>footer item 1</li>
            <li className='foot-item'>footer item 2</li>
            <li className='foot-item'>footer item 3</li>
            <li className='foot-item'>footer item 4</li>
          </ul>
          <ul className='nav-info'>
            <hr />
            <div className='foot-nav' tabindex='0'><h3>Explore</h3></div>
            <li className='foot-item'>footer item 1</li>
            <li className='foot-item'>footer item 2</li>
            <li className='foot-item'>footer item 3</li>
            <li className='foot-item'>footer item 4</li>
          </ul>
        <div id='newsletter'>
          <h3>Newsletter</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id distinctio </p>
          <div className='email-form'>
            <input placeholder='Your e-mail here' /> <button> Sign Up </button>
          </div>
          <div className='social-media'>
            <span className="fa fa-facebook-f"></span>
            <span className="fa fa-twitter"></span>
            <span className="fa fa-instagram"></span>
            <span className="fa fa-pinterest-p"></span>
          </div>
        </div>
          <ul className='nav-info'>
            <hr />
            <div className='foot-nav' tabindex='0'><h3>Locations</h3></div>
            <hr />
            <li className='foot-item'>footer item 1</li>
            <li className='foot-item'>footer item 2</li>
            <li className='foot-item'>footer item 3</li>
            <li className='foot-item'>footer item 4</li>
          </ul>
      </nav>
      <div id='footer-info'>
        <div className='copyright-info'>
          <h5> copyright © 2018 </h5>
          <h6> www.projectvanilla.com </h6> <span>|</span> <h6>Design and Build by Parkfield Commerce </h6>
        </div>
        <div className='card-info'>
        <FontAwesomeIcon icon={ faCcVisa }/>
        <FontAwesomeIcon icon={ faCcMastercard }/>
        <FontAwesomeIcon icon={ faPaypal } />
        <FontAwesomeIcon icon={ faCcAmex }/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
