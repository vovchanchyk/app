import React from 'react';
import './styles/App.scss';
import Header from './components/header/Header';
import { Provider } from 'react-redux';
import store from './store/store';

import { HashRouter as Router} from "react-router-dom";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Provider store = {store}>
      <Router>
    <div className="App">
      <Header/>
       <Main/>
       <Footer/>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
