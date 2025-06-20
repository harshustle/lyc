import React from 'react';

const navButtons = [
  'About Us',
  'LzyCrazy Services',
  'LzyCrazy Marketplace',
  'We Are Hiring',
  'LzyCrazy News',
];

const NavigationButtons = () => (
  <div className="nav-buttons">
    {navButtons.map((btn, idx) => (
      <button className="nav-btn" key={idx}>{btn}</button>
    ))}
  </div>
);

export default NavigationButtons; 