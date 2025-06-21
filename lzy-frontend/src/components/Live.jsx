import React from 'react';
import './Live.css';
import { FaShoppingBag, FaMoneyBillWave, FaEye, FaGlobe } from 'react-icons/fa';

const Live = () => (
  <div className="live-dashboard-modern">
    <div className="live-cards-row-modern">
      <div className="live-modern-card">
        <div className="live-modern-card-header">
          <span className="live-modern-card-title">Total User</span>
          <span className="live-modern-card-icon" style={{background:'#e0f7ef'}}><FaShoppingBag color="#10b981" /></span>
        </div>
        <div className="live-modern-card-value">24159</div>
        <div className="live-modern-card-chart">
          <svg width="100%" height="40" viewBox="0 0 120 40">
            <polyline points="0,30 20,20 40,25 60,10 80,25 100,20 120,30" fill="none" stroke="#10b981" strokeWidth="2" />
            <polygon points="0,40 0,30 20,20 40,25 60,10 80,25 100,20 120,30 120,40" fill="#10b98122" />
          </svg>
        </div>
      </div>
      <div className="live-modern-card">
        <div className="live-modern-card-header">
          <span className="live-modern-card-title">Real Time User</span>
          <span className="live-modern-card-icon" style={{background:'#ede9fe'}}><FaMoneyBillWave color="#a78bfa" /></span>
        </div>
        <div className="live-modern-card-value">5.8k</div>
        <div className="live-modern-card-chart">
          <svg width="100%" height="40" viewBox="0 0 120 40">
            <polyline points="0,35 20,30 40,32 60,18 80,28 100,20 120,35" fill="none" stroke="#a78bfa" strokeWidth="2" />
            <polygon points="0,40 0,35 20,30 40,32 60,18 80,28 100,20 120,35 120,40" fill="#a78bfa22" />
          </svg>
        </div>
      </div>
      <div className="live-modern-card">
        <div className="live-modern-card-header">
          <span className="live-modern-card-title">Country</span>
          <span className="live-modern-card-icon" style={{background:'#e0f2fe'}}><FaGlobe color="#38bdf8" /></span>
        </div>
        <div className="live-modern-card-value">
          <input
            type="text"
            className="country-search-input"
            placeholder="Search or select country..."
            list="country-list"
            style={{width: '90%', padding: '6px 10px', borderRadius: '8px', border: '1px solid #e0e7ef', fontSize: '1rem'}}
          />
          <datalist id="country-list">
            <option value="India" />
            <option value="United States" />
            <option value="United Kingdom" />
            <option value="Canada" />
            <option value="Australia" />
            <option value="Germany" />
            <option value="France" />
            <option value="Japan" />
            <option value="China" />
            <option value="Brazil" />
          </datalist>
        </div>
        <div className="live-modern-card-chart">
          <svg width="100%" height="40" viewBox="0 0 120 40">
            <polyline points="0,30 20,18 40,28 60,12 80,30 100,18 120,30" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <polygon points="0,40 0,30 20,18 40,28 60,12 80,30 100,18 120,30 120,40" fill="#38bdf822" />
          </svg>
        </div>
      </div>
    </div>

  </div>
);

export default Live; 