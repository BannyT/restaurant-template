import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Logo & Description */}
        <div style={sectionStyle}>
          <h2 style={{ color: '#ff4d4f', fontSize: 24, marginBottom: 8 }}>GourmetBites</h2>
          <p style={{ color: '#bbb', fontSize: 16, lineHeight: 1.6 }}>
            Experience the finest dishes crafted with passion and premium ingredients. Join us for an unforgettable dining journey.
          </p>
        </div>

        {/* Quick Links */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Quick Links</h3>
          <ul style={listStyle}>
            <li><a style={linkStyle} href="/">Home</a></li>
            <li><a style={linkStyle} href="/menu">Menu</a></li>
            <li><a style={linkStyle} href="/gallery">Gallery</a></li>
            <li><a style={linkStyle} href="/reservation">Reservation</a></li>
            <li><a style={linkStyle} href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={sectionStyle}>
          <h3 style={sectionTitle}>Contact</h3>
          <p style={{ color: '#bbb', fontSize: 16 }}>📍 123 Culinary St, New York</p>
          <p style={{ color: '#bbb', fontSize: 16 }}>📞 +1 234 567 890</p>
          <p style={{ color: '#bbb', fontSize: 16 }}>✉️ contact@gourmetbites.com</p>

          <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>IG</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialStyle}>TW</a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: 20, color: '#666', fontSize: 14, borderTop: '1px solid #333' }}>
        &copy; {new Date().getFullYear()} GourmetBites. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyle = {
  background: '#1c1c1c',
  padding: '60px 20px 20px',
  fontFamily: 'sans-serif',
};

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: 1200,
  margin: '0 auto',
  gap: 40,
};

const sectionStyle = {
  flex: '1 1 250px',
  minWidth: 200,
};

const sectionTitle = {
  color: '#ff4d4f',
  fontSize: 20,
  marginBottom: 16,
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#bbb',
  display: 'block',
  marginBottom: 8,
  transition: '0.3s',
};

const socialStyle = {
  color: '#fff',
  background: '#ff4d4f',
  borderRadius: '50%',
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  textDecoration: 'none',
  transition: '0.3s',
};
