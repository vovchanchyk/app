import React from 'react';
import './../../styles/App.scss';
import { Header }  from '../Header';
import { Provider } from 'react-redux';
import store from '../../store/store';

import { BrowserRouter as Router} from "react-router-dom";
import {Main} from '../Main';
import {Footer} from '../Footer';

function App() {
  return (
    <Provider store = {store}>
      <Router>
    <div className="app">
      <Header/>
       <Main/>
       <Footer/>
    </div>
    </Router>
    </Provider>
  );
}

export {App};
