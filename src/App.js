// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerForm from './components/CustomerForm';

import Navbar from './components/NavBar';
import CustomerInfo from './components/CustomerInfo';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <h1>Customer Management</h1>
        <Routes>
          <Route path="/" element={<CustomerForm />} />
          <Route path="/customers" element={<CustomerInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
