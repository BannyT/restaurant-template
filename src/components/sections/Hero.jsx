import React from 'react';

export default function Hero() {
  return (
    <section style={{
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '40px',
        borderRadius: 12,
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>Delicious Moments Await</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: 24 }}>Experience the finest dishes crafted with love and passion.</p>
        <button style={{
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: 25,
          border: 'none',
          backgroundColor: '#ff4d4f',
          color: '#fff',
          cursor: 'pointer',
        }}>Reserve a Table</button>
      </div>
    </section>
  );
}
