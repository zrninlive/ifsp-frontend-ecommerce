import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import { Header, Menu, Footer, Loader } from './components';

import Routes from './routes';

import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Menu />
      <Routes />
      <Footer />
      <GlobalStyle />
      <ToastContainer autoClose={5000} />
      {/* <Loader /> */}
    </Router>
  );
}

export default App;
