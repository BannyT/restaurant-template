import React, { useState } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reservation Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ padding: '80px 20px', textAlign: 'center', background: '#fff8f5' }}>
        <h2 style={{ fontSize: 32, color: '#ff4d4f', marginBottom: 16 }}>Reservation Confirmed!</h2>
        <p style={{ fontSize: 18, color: '#555' }}>
          Thank you for booking with us. We look forward to serving you.
        </p>
      </section>
    );
  }

  return (
    <section style={{ padding: '80px 20px', background: '#fff8f5' }}>
      <div style={{
        maxWidth: 700,
        margin: '0 auto',
        background: '#fff',
        padding: 40,
        borderRadius: 16,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, marginBottom: 40, color: '#ff4d4f' }}>Book a Table</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
          <input style={inputStyle} type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
          <input style={inputStyle} type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
          <input style={inputStyle} type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
          <div style={{ display: 'flex', gap: 16 }}>
            <input style={{ ...inputStyle, flex: 1 }} type="date" name="date" required value={formData.date} onChange={handleChange} />
            <input style={{ ...inputStyle, flex: 1 }} type="time" name="time" required value={formData.time} onChange={handleChange} />
          </div>
          <input style={inputStyle} type="number" name="guests" min="1" max="20" value={formData.guests} onChange={handleChange} />
          <button style={buttonStyle} type="submit">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: '14px 20px',
  borderRadius: 8,
  border: '1px solid #ddd',
  fontSize: 16,
  outline: 'none',
  transition: '0.3s',
};

const buttonStyle = {
  padding: '16px',
  borderRadius: 50,
  border: 'none',
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
  background: 'linear-gradient(90deg, #ff4d4f, #ff7a5c)',
  cursor: 'pointer',
  transition: '0.3s',
};
