import React from 'react';
import logoImg from '../assets/lzy logo-Cl4gUC2f.jpg';

const LogoSection = () => (
  <div className="logo-section">
    <div className="logo-img">
      <img src={logoImg} alt="LzyCrazy Logo" style={{ width: 250, height: 180, objectFit: 'contain' }} />
    </div>
  </div>
);

export default LogoSection; 