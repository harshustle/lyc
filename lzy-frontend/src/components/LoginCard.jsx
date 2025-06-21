import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginCard = () => {
  const navigate = useNavigate();

  return (
    <div className="login-card">
      <form className="login-form">
        <div className="input-group">
          <span className="input-icon">📧</span>
          <input type="email" placeholder="Email Address" required />
        </div>
        <div className="input-group">
          <span className="input-icon">🔒</span>
          <input type="password" placeholder="Password" required />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button className="login-btn" type="submit">Login</button>
      </form>
      <div className="divider">
        <span>or continue with</span>
      </div>
      <div className="social-login">
        <button className="social-btn google"><span className="icon">G</span> Google</button>
        <button className="social-btn facebook"><span className="icon">f</span> Facebook</button>
      </div>
      <button className="create-account-btn">Create New Account</button>
      <button className="dashboard-nav-btn" onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
    </div>
  );
};

export default LoginCard; 