import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">🍴 GourmetBites</Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/reservation" className="nav-link">Reservation</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <Link to="/reservation" className="cta">Book Table</Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* --- Styles --- */}
      <style jsx>{`
        header {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.2);
          transition: all 0.4s ease;
          padding: 1rem 2rem;
        }
        header.scrolled {
          background: rgba(255,255,255,0.95);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ff4d4f;
          text-decoration: none;
        }
        .nav {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          text-decoration: none;
          font-weight: 500;
          color: #333;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #ff4d4f;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .cta {
          background: #ff4d4f;
          color: #fff;
          padding: 0.6rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: transform 0.3s;
        }
        .cta:hover {
          transform: scale(1.05);
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #333;
        }
        @media(max-width: 768px) {
          .nav {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(255,255,255,0.95);
            flex-direction: column;
            width: 200px;
            gap: 1rem;
            padding: 1rem;
            border-radius: 0 0 10px 10px;
            transform: translateY(-20px);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }
          .nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .hamburger {
            display: block;
          }
          .cta {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
