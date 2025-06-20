import React from 'react'
import './App.css'
import LogoSection from './components/LogoSection'
import SearchSection from './components/SearchSection'
import NavigationButtons from './components/NavigationButtons'
import LoginCard from './components/LoginCard'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <>
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
      <FooterSection/>
      </>
  )
}

export default App
