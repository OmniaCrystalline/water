import { useState } from 'react';
import { FaChevronDown, FaPhone, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-header-gradient text-white relative z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 bg-[url(./logo.png)] w-72 h-16 bg-no-repeat bg-center bg-contain animate-fade-in">
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-blue-300 transition-all duration-300 hover:scale-105 flex items-center gap-1">
            Home <FaChevronDown className="w-4 h-4" />
          </a>
          <a href="#about" className="hover:text-blue-300 transition-all duration-300 hover:scale-105 flex items-center gap-1">
            About Us <FaChevronDown className="w-4 h-4" />
          </a>
          <a href="#services" className="hover:text-blue-300 transition-all duration-300 hover:scale-105 flex items-center gap-1">
            Services <FaChevronDown className="w-4 h-4" />
          </a>
          <a href="#pricing" className="hover:text-blue-300 transition-all duration-300 hover:scale-105 flex items-center gap-1">
            Pricing <FaChevronDown className="w-4 h-4" />
          </a>
        </nav>

        {/* Emergency Contact & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-sm text-blue-300">24/7 Emergency Call</span>
            <div className="flex items-center gap-2">
              <FaPhone className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-lg">123-456-7890</span>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase px-6 py-2 rounded transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-orange-500/50 active:scale-95 hidden md:block">
            GET A QUOTE
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-blue-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="bg-blue-900/95 backdrop-blur-sm px-6 py-4 space-y-4">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-300 transition-colors py-2 border-b border-blue-700"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-300 transition-colors py-2 border-b border-blue-700"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-300 transition-colors py-2 border-b border-blue-700"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-300 transition-colors py-2 border-b border-blue-700"
          >
            Pricing
          </a>
          <div className="pt-4">
            <div className="flex flex-col items-center gap-2 mb-4">
              <span className="text-sm text-blue-300">24/7 Emergency Call</span>
              <div className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-lg">123-456-7890</span>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase w-full px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 active:scale-95">
              GET A QUOTE
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
