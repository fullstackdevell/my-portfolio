import React from 'react';
import { Routes, Route } from 'react-router-dom';
// All local imports below have been updated with the explicit .jsx extension
import NavBar from './components/NavBar.jsx'; 
import HomePage from './pages/HomePage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx';
import Footer from './components/Footer.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';

function App() {
  return (
      <div className="bg-dark-bg min-h-screen text-white">
        
        {/* Navbar is outside Routes to be persistent */}
        <NavBar /> 
        
        {/* ScrollToHash listens to URL changes across the entire app 
            This enables your /#projects and /#contact links to work.
        */}
        <ScrollToHash />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            {/* Route for detailed project view */}
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          </Routes>
        </main>

        {/* Footer is placed outside <main> for better semantic structure */}
        <Footer />
        
      </div>
  )
}

export default App;