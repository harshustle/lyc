import React from 'react'
import './App.css'
import LogoSection from './components/LogoSection'
import SearchSection from './components/SearchSection'
import NavigationButtons from './components/NavigationButtons'
import LoginCard from './components/LoginCard'
import FooterSection from './components/FooterSection'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <div className="main-bg">
            <div className="left-section">
              <LogoSection />
              <SearchSection />
              <NavigationButtons />
            </div>
            <div className="right-section">
              <LoginCard />
            </div>
          </div>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App
