import React from 'react';
import SocialIcons from './SocialIcons'; // Assuming SocialIcons is in the same folder

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-white mt-12 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright Text */}
        <p className="font-roboto-mono text-sm text-gray-400 order-2 md:order-1 mt-4 md:mt-0">
          © {currentYear} VIKTORIIA VINNYKOVA | Junior Full-Stack Developer
        </p>

        {/* Social Icons (Reused) */}
        {/* Added a margin class for spacing below the icons on small screens */}
        <div className="order-1 md:order-2 mb-4 md:mb-0">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;