import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LogIn from './log-in/LogIn';
import Success from './success/Success';
import Footer from './footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
