import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function NavBar () {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="p-4 flex justify-end md:justify-center items-center relative z-50 bg-dark-bg">
            
            {/*  hamburger menu */}
            <div className="md:hidden">
                <button 
                    onClick={() => setIsOpen(true)} // Only opens the menu
                    className="p-2 text-white hover:text-purple transition duration-300 rounded-full"
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            <div className='hidden md:flex space-x-12 lg:space-x-20'>
                <Link 
                    to="/" 
                    className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono"
                >
                    Home
                </Link>
                
                <Link 
                    to="/#projects" 
                    className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono"
                >
                    Projects
                </Link>

                {/* Experience link uses Link to go to its dedicated route */}
                <Link 
                    to="/experience" 
                    className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono"
                >
                    Experience
                </Link>
                
                {/* Contact link uses Link to go to the homepage and then hash scrolls */}
                <Link 
                    to="/#contact" 
                    className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono"
                >
                    Contact
                </Link>
            </div>

            {/* Mobile menu, shown when hamburger is clicked */}
            {isOpen && (
                <>
                    {/* Backdrop: Semi-transparent overlay that covers the rest of the screen */}
                    <div 
                        className="fixed inset-0 bg-black/50 md:hidden z-30 transition-opacity duration-300"
                        onClick={handleMenuClick} // Click anywhere on the backdrop to close the drawer
                    />

                    {/* Drawer Panel: Slides from the right */}
                    <div 
                        // Fixed to top-right, full screen height, and set to a specific width (w-64)
                        // Uses transform and transition for the sliding effect
                        className={`fixed top-0 right-0 h-screen w-64 bg-dark-bg p-6 md:hidden z-40 
                                    transform transition-transform duration-300 ease-in-out 
                                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        {/* Dedicated Close Button inside the drawer */}
                        <div className="flex justify-end mb-10">
                            <button 
                                onClick={handleMenuClick} 
                                className="p-2 text-white hover:text-purple transition duration-300"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        {/* Links container */}
                        <div className="flex flex-col space-y-8 text-2xl font-roboto-mono">
                            <Link 
                                to="/" 
                                onClick={handleMenuClick}
                                className="text-white hover:text-purple transition duration-300"
                            >
                                Home
                            </Link>
                            
                            <Link 
                                to="/#projects" 
                                onClick={handleMenuClick}
                                className="text-white hover:text-purple transition duration-300"
                            >
                                Projects
                            </Link>

                            <Link 
                                to="/experience" 
                                onClick={handleMenuClick}
                                className="text-white hover:text-purple transition duration-300"
                            >
                                Experience
                            </Link>
                            
                            <Link 
                                to="/#contact" 
                                onClick={handleMenuClick}
                                className="text-white hover:text-purple transition duration-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}

export default NavBar;