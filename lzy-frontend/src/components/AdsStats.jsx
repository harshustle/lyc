import React from 'react';
import './AdsStats.css';
import { FaBullhorn, FaBuilding, FaImage, FaVideo, FaHome } from 'react-icons/fa';

const adsData = [
  { title: 'Total User Ads', icon: <FaBullhorn color="#10b981" />, value: 1, bg: '#e0f7ef' },
  { title: 'Business Profile', icon: <FaBuilding color="#a78bfa" />, value: 1, bg: '#ede9fe' },
  { title: 'Banner Ads', icon: <FaImage color="#38bdf8" />, value: 1, bg: '#e0f2fe' },
  { title: 'Video Ads', icon: <FaVideo color="#f59e42" />, value: 1, bg: '#fff7e6' },
  { title: 'Home Ads', icon: <FaHome color="#f87171" />, value: 1, bg: '#ffe4e6' },
];

const AdsStats = () => (
  <div className="ads-stats-row">
    {adsData.map((ad, idx) => (
      <div className="ads-stats-card" key={idx}>
        <div className="ads-stats-card-header">
          <span className="ads-stats-card-title">{ad.title}</span>
          <span className="ads-stats-card-icon" style={{background: ad.bg}}>{ad.icon}</span>
        </div>
        <div className="ads-stats-card-value">{ad.value}</div>
      </div>
    ))}
  </div>
);

export default AdsStats; 