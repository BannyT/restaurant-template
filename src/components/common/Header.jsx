import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{padding: '16px 32px', display:'flex', justifyContent:'space-between', alignItems:'center', background:'#fff', boxShadow:'0 2px 5px rgba(0,0,0,0.1)'}}>
      <h1 style={{margin:0, fontSize:24}}>Restaurant</h1>
      <nav>
        <Link to="/" style={{margin:'0 12px'}}>Home</Link>
        <Link to="/menu" style={{margin:'0 12px'}}>Menu</Link>
        <Link to="/gallery" style={{margin:'0 12px'}}>Gallery</Link>
        <Link to="/contact" style={{margin:'0 12px'}}>Contact</Link>
      </nav>
    </header>
  );
}
