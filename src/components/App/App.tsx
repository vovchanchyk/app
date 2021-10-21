import React from 'react';
import '../../styles/App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../Header';
import store from '../../store/store';

import { Main } from '../Main';
import { Footer } from '../Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export { App };
