import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact Message:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ padding: '80px 20px', textAlign: 'center', background: '#f5f5f5' }}>
        <h2 style={{ fontSize: 32, color: '#ff4d4f', marginBottom: 16 }}>Message Sent!</h2>
        <p style={{ fontSize: 18, color: '#555' }}>We will get back to you shortly. Thank you!</p>
      </section>
    );
  }

  return (
    <section style={{ padding: '80px 20px', background: '#f5f5f5' }}>
      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        display: 'flex',
        gap: 40,
        flexWrap: 'wrap',
      }}>
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          background: '#fff',
          padding: 40,
          borderRadius: 16,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'grid',
          gap: 20,
        }}>
          <h2 style={{ fontSize: 32, marginBottom: 20, color: '#ff4d4f' }}>Contact Us</h2>
          <input style={inputStyle} type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input style={inputStyle} type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <textarea style={{ ...inputStyle, minHeight: 140 }} name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
          <button style={buttonStyle} type="submit">Send Message</button>
        </form>

        <div style={{
          flex: 1,
          minHeight: 400,
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}>
          <iframe
            title="Restaurant Map"
            src="https://maps.google.com/maps?q=New%20York%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            style={{ width: '100%', height: '100%', border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
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
