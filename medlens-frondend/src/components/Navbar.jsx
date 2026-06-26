import React, { useState, useEffect } from 'react';
import { FaCapsules, FaSun, FaRegMoon, FaChevronRight } from 'react-icons/fa6';
import '../styles/Navbar.css';

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Features', 'Scanner', 'Dashboard', 'About'];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-logo">
        <FaCapsules className="logo-icon" />
        <span>MedLens AI</span>
      </div>

      <nav className="nav-menu">
        <ul className="nav-links">
          {navItems.map(item => {
            const id = item.toLowerCase();
            return (
              <li key={item}>
                <a 
                  href={`#${id}`} 
                  className={activeSection === id ? 'active' : ''}
                >
                  {item}
                  {activeSection === id && <span className="active-indicator" />}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-actions">
        <button 
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FaSun /> : <FaRegMoon />}
        </button>
        <a href="#scanner" className="nav-demo-btn">
          Try Demo <FaChevronRight className="btn-arrow" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;