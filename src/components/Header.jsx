import React from 'react';

function Header () {
    return (
        <nav className="p-4 flex justify-center items-center">
            <div className='flex space-x-24'>
                <a href="#home" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Home</a>

                <a href="#projects" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Projects</a>

                <a 
                    href="another website page" // 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono"
                >
                    Experience
                </a>
                
                <a href="#contact" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Contact</a>
            </div>
        </nav>
    )
}

export default Header;