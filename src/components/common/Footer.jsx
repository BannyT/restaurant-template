import React from 'react';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
          <div>
            <h3 style={{margin:0}}>LaMesa</h3>
            <p className="muted">Modern restaurant template — made with ❤️</p>
          </div>
          <div>
            <small>© {new Date().getFullYear()} LaMesa. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}