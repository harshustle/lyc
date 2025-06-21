import React from 'react';
import './Sidebar.css';
import { FaHome, FaCalendarAlt, FaFileAlt, FaCube, FaWpforms, FaMapMarkerAlt, FaTable, FaChartBar, FaPalette, FaSlidersH, FaMedal } from 'react-icons/fa';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-section">
      <div className="sidebar-item active">
        <FaHome className="sidebar-icon" />
        <span>Dashboard</span>
      </div>
      <div className="sidebar-label">Page</div>
      <div className="sidebar-item"><FaCalendarAlt className="sidebar-icon" /> Calendar</div>
      <div className="sidebar-item"><FaFileAlt className="sidebar-icon" /> Starter Pages</div>
    </div>
    <div className="sidebar-label">Elements</div>
    <div className="sidebar-item"><FaCube className="sidebar-icon" /> Components</div>
    <div className="sidebar-item"><FaWpforms className="sidebar-icon" /> Forms</div>
    <div className="sidebar-item"><FaMapMarkerAlt className="sidebar-icon" /> Maps</div>
    <div className="sidebar-item"><FaTable className="sidebar-icon" /> Tables</div>
    <div className="sidebar-item"><FaChartBar className="sidebar-icon" /> Chart</div>
    <div className="sidebar-item"><FaPalette className="sidebar-icon" /> Icons</div>
    <div className="sidebar-item"><FaSlidersH className="sidebar-icon" /> Level</div>
    <div className="sidebar-item badge">
      <FaMedal className="sidebar-icon" />
      Badge Items
      <span className="sidebar-badge">Hot</span>
    </div>
  </aside>
);

export default Sidebar; 