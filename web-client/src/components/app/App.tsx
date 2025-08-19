import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Header from '../Header';
import Home from '../Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<div>about</div>} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
