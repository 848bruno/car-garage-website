import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#2e7d32', padding: '1rem' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Link to="/" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
        Car Garage
      </Link>
      <div>
        <NavLink to="/" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Home</NavLink>
        <NavLink to="/services" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Services</NavLink>
        <NavLink to="/booking" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Booking</NavLink>
        <NavLink to="/about" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>About</NavLink>
        <NavLink to="/contact" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Contact</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
