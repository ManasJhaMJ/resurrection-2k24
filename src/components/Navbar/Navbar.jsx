import { Link } from 'react-router-dom';
import { useState } from 'react'
import Resurrection from '../../assets/Resurrection.webp'
import resurrection_text from '../../assets/resurrection-text.webp'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className="flex items-center justify-between p-6">
            <div className="flex items-center">
                {/* Logo and text */}
                <div className="flex items-center">
                    <Link to="/" className="flex justify-between items-center">
                        <img src={Resurrection} alt="Logo" className=" h-16 w-16" />
                        <img src={resurrection_text} alt="Logo" className="h-12 w-15 nav-logo-text" />
                    </Link>
                </div>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg
                        className="w-6 h-6 z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex space-x-8 text-white">
                <Link to="/" className="hover:text-yellow-500">Home</Link>
                <a href="#about" className="hover:text-yellow-500">About</a>
                <Link to="/Events" className="hover:text-yellow-500">Events</Link>
                <Link to="/sponsors" className="hover:text-yellow-500">Sponsors</Link>
                <div>|</div>
                <Link to="/Team" className="hover:text-yellow-500">Our Team</Link>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-[6rem] left-0 w-full bg-[#0c0c0c] text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <a href="#home" className="block py-2 hover:text-yellow-500" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="block py-2 hover:text-yellow-500" onClick={toggleMenu}>About</a>
                    <Link to="/Events" className="block py-2 hover:text-yellow-500" onClick={toggleMenu}>Events</Link>
                    <Link to="/sponsors" className="block py-2 hover:text-yellow-500" onClick={toggleMenu}>Sponsors</Link>
                    <Link to="/Team" className="block py-2 hover:text-yellow-500" onClick={toggleMenu}>Our Team</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar