import React from 'react';
import './FooterSection.css';

const FooterSection = () => (
  <footer className="footer-section">
    <div className="footer-top">
      <span>India</span>
      <span className="footer-divider">|</span>
      <span>LzyCrazy offered in:</span>
      <a href="#" className="footer-lang">हिन्दी</a>
      <a href="#" className="footer-lang">English</a>
      <a href="#" className="footer-lang">বাংলা</a>
      <a href="#" className="footer-lang">العربية</a>
    </div>
    <div className="footer-bottom">
      <a href="#" className="footer-link">Privacy</a>
      <a href="#" className="footer-link">Terms</a>
    </div>
  </footer>
);

export default FooterSection; 