import React from 'react';
import logoImg from '../assets/lzy logo-Cl4gUC2f.jpg';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <img src={logoImg} alt="LzyCrazy Logo" className="navbar-logo" />
      <span className="navbar-brand-text">LzyCrazy</span>
    </div>
    <div className="navbar-center">
      <span className="navbar-user-avatar">👤</span>
      <span className="navbar-user-name">Mr Hasan</span>
      <span className="navbar-user-id">id 1c001</span>
    </div>
    <div className="navbar-right">
      <span className="navbar-icon" title="Call">📞</span>
      <span className="navbar-icon" title="Video">📹</span>
      <span className="navbar-icon" title="Notification">🔔</span>
      <span className="navbar-icon" title="Profile">👤</span>
      <button className="navbar-dashboard-btn">Dashboard 1</button>
      <button className="navbar-dashboard-btn">Dashboard 2</button>
    </div>
  </nav>
);

export default Navbar; 