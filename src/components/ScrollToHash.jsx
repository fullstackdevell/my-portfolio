import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, hash } = location;

    // Check if a hash exists (e.g., #projects)
    if (hash) {
      // Find the element that matches the hash (e.g., the element with id="projects")
      const element = document.getElementById(hash.substring(1));

      if (element) {
        // Scroll the element into view
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // This effect runs whenever the URL (including the hash) changes
  }, [location]); 

  return null; // This component renders nothing
};

export default ScrollToHash;