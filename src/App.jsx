import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx'; 
import HomePage from './pages/HomePage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx';
import Footer from './components/Footer.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';

function App() {
  return (
      <div className="bg-dark-bg min-h-screen text-white">
        <NavBar /> 
        <ScrollToHash />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App;