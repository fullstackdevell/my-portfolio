import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <nav className="p-4 flex justify-center items-center">
            <div className='flex space-x-24'>
                <Link to="/" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Home</Link>
                <Link to="/projects" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Projects</Link>
                <Link to="/experience" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Experience</Link>
                <Link to="/contact" className="text-sm font-medium hover:text-purple transition duration-300 font-roboto-mono">Contact</Link>
            </div>
        </nav>
    )
}

export default Header;