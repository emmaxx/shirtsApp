import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/styles.scss';
import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>,
  document.getElementById('root')
);