import React from 'react';

export default function About(){
  return (
    <section className="section">
      <div className="container card">
        <div style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{flex:'1 1 300px'}}>
            <img src="/images/chef.jpg" alt="Chef" style={{width:'100%',borderRadius:8}} />
          </div>
          <div style={{flex:'2 1 360px'}}>
            <h2 style={{marginTop:0,fontFamily:'Playfair Display, serif'}}>Our Story</h2>
            <p style={{color:'var(--muted)'}}>LaMesa was born out of a love for seasonal produce and community dining. Our chef crafts menus that change with the harvest — come taste the season.</p>
            <p style={{marginTop:12}}>Open daily from 11am — 10pm. Book a private event or join us for weekend brunch.</p>
          </div>
        </div>
      </div>
    </section>
  );
}