import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo"><Link to="/">LaMesa</Link></div>

        <nav>
          <div className="nav-links" aria-hidden={open?false:true}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <a href="#reservation" className="btn-primary">Reserve</a>
          </div>
          <button className="hamburger" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>
            {open? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}