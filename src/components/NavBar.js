// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Add Customer</Link> | <Link to="/customers">View Customers</Link>
    </nav>
  );
};

export default Navbar;
