import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Watson',
    comment: 'Absolutely amazing food and atmosphere! Highly recommended.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'John Doe',
    comment: 'The dishes are creative, fresh, and incredibly tasty.',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Sophia Lee',
    comment: 'A wonderful dining experience. The staff is very friendly.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww',
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: 40 }}>What Our Guests Say</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 20,
        }}>
          {testimonials.map(t => (
            <div key={t.id} style={{
              background: '#fff',
              padding: 24,
              borderRadius: 12,
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              textAlign: 'center',
            }}>
              <img src={t.photo} alt={t.name} style={{ borderRadius: '50%', marginBottom: 16,width:75,height:85 }} />
              <p style={{ fontStyle: 'italic', marginBottom: 12 }}>"{t.comment}"</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
