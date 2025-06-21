import React from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Live from './Live';
import AdsStats from './AdsStats';
import Sidebar from './Sidebar';


const Dashboard = () => (
  <div className="dashboard-vertical-layout">
    <Navbar />
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main-content">
        <Live />
        <AdsStats />
      </div>
    </div>
  </div>
);

export default Dashboard;
