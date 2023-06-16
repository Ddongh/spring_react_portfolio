import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import LandingPage from './LandingPage/LandingPage.js';
import YoutubeMain from './youtubeSite/components/YoutubeMainPage.js';
import NavBar from './NavBar/NavBar.js';

function App() {
  

  return (
    <Router>
      
      <NavBar />
      
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/youtube" element={<YoutubeMain />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
