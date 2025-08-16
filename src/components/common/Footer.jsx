import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4 style={{fontFamily:'Playfair Display,serif',fontSize:22}}>Restaurant Pro</h4>
          <p>Modern fine-dining HTML template with premium motion, lightbox gallery, and elegant typography.</p>
          <div style={{marginTop:12,display:'flex',gap:10}}>
            <span className="badge">Open Daily 10:00–22:00</span>
            <span className="badge">Downtown</span>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:8}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Elite Street<br/>City, Country</p>
          <p>+1 (555) 333-2222</p>
          <p>booking@restaurantpro.dev</p>
        </div>
        <div>
          <h4>Follow</h4>
          <p><a href="#">Instagram</a><br/><a href="#">Facebook</a><br/><a href="#">TikTok</a></p>
        </div>
      </div>
      <div className="container" style={{marginTop:26,opacity:.7,borderTop:'1px solid var(--border)',paddingTop:18,fontSize:14}}>
        © {new Date().getFullYear()} Restaurant Pro. All rights reserved.
      </div>
    </footer>
  );
}
