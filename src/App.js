
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/index'
import SignIn from './pages/signin'
import React, { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server';
import Reactga from "react-ga";





function App() {

  useEffect(() => {
    Reactga.initialize('G-CZ1BXWM905');
    //to report page view
    Reactga.pageview('/home');

  }, [])

  return (
    <Router>


      <Route path='/' component={Home} exact />
      <Route path='/' component={SignIn} exact />




    </Router>
  );
}

ReactDOMServer.renderToString(<App />)

export default App;
