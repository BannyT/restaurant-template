import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: '#000' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
