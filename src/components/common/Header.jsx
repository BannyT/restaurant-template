import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Header(){
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const { pathname } = useLocation();

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);

  useEffect(()=>{
    document.documentElement.dataset.theme = theme; // hook if you want theme-specific styles later
  },[theme]);

  useEffect(()=>{ window.scrollTo(0,0); },[pathname]);

  return (
    <header className={`header ${scrolled ? 'nav-blur' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop" alt="logo" />
          <span style={{textDecoration:'none'}}>Restaurant Pro</span>
        </Link>
        <nav className="nav" style={{display:'flex',alignItems:'center',gap:6}}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button className="btn btn-ghost" onClick={()=>setTheme(t=> t==='dark' ? 'light' : 'dark')}>
            {theme==='dark' ? <FiSun/> : <FiMoon/>}
          </button>
          <a href="#reservation" className="btn btn-primary">Reserve</a>
        </nav>
      </div>
    </header>
  );
}
