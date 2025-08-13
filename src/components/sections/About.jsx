import React from 'react';

export default function About() {
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
        <img src="https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About us" style={{ flex: 1, borderRadius: 12,height:500 }} />
        <div style={{ flex: 1 }}>
          <h2>About Us</h2>
          <p style={{ lineHeight: 1.6, marginBottom: 16 }}>
            We are a passionate team of chefs and food lovers dedicated to delivering unforgettable dining experiences.
            From locally sourced ingredients to exquisite recipes, every dish tells a story.
          </p>
          <p style={{ lineHeight: 1.6 }}>
            Join us for a culinary journey that delights the senses and creates memories you’ll cherish forever.
          </p>
        </div>
      </div>
    </section>
  );
}
