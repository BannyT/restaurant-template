import React, { useState } from 'react';
import useMenu from '../../hooks/useMenu';

function MenuCard({ item, onDelete }) {
  return (
    <div className="card" style={{
      border: '1px solid #eee',
      borderRadius: 8,
      overflow: 'hidden',
      padding: 16,
      textAlign: 'center',
      background: '#fff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    }}>
      <img src={item.photoUrl} alt={item.name} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8 }} />
      <h3>{item.name}</h3>
      <p style={{ color: '#666' }}>{item.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <strong>${item.price.toFixed(2)}</strong>
        {/* <button onClick={() => onDelete(item.id)} style={{
          border: 'none',
          background: '#ff4d4f',
          color: '#fff',
          padding: '6px 12px',
          borderRadius: 4,
          cursor: 'pointer',
        }}>Delete</button> */}
      </div>
    </div>
  );
}

export default function Menu() {
  const { menuItems, deleteMenuItem } = useMenu();
  const [category, setCategory] = useState('all');

  const categories = ['all', 'starters', 'mains', 'desserts', 'drinks'];
  const filtered = menuItems.filter(item => category === 'all' ? true : item.category === category);

  return (
    <section style={{ padding: '60px 20px', background: '#f9f9f9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Our Menu</h2>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: '1px solid #333',
                background: category === c ? '#333' : 'transparent',
                color: category === c ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >{c}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {filtered.map(item => <MenuCard key={item.id} item={item} onDelete={deleteMenuItem} />)}
        </div>
      </div>
    </section>
  );
}
