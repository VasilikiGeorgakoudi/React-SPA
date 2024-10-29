import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for Routes
import Home from './pages/index';

import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; // Updated to react-ga4
// import ReactDOMServer from 'react-dom/server';

function App() {
  useEffect(() => {
    ReactGA.initialize('G-CZ1BXWM905');
    // To report page view
    ReactGA.send({ hitType: 'pageview', page: '/home' }); // Updated for react-ga4

  }, []);

  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch in React Router v6 */}
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

// If you're doing SSR, you would usually have this in a Node.js server file
// ReactDOMServer.renderToString(<App />);

export default App;
