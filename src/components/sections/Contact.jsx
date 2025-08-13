import React from 'react';

export default function Contact(){
  return (
    <section className="section">
      <div className="container card">
        <h2>Contact Us</h2>
        <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
          <div style={{flex:'1 1 320px'}}>
            <p>Phone: +256 700 000 000</p>
            <p>Address: 123 Food Ave, Kampala</p>
            <p>Hours: 11:00 — 22:00 daily</p>
          </div>
          <div style={{flex:'1 1 320px'}}>
            <iframe title="map" style={{width:'100%',height:200,border:0,borderRadius:8}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127743.123456789!2d32.5!3d0.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0KDQvtC70Y_QsNC80YLQvtC_0YPRgNCw0Y8!5e0!3m2!1sen!2sug!4v0000000000000" />
          </div>
        </div>
      </div>
    </section>
  );
}