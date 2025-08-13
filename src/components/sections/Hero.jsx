import React from 'react';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <div style={{display:'flex',alignItems:'center',gap:30,flexWrap:'wrap'}}>
          <div style={{flex:'1 1 360px'}}>
            <h1 style={{fontFamily:'Playfair Display, serif',fontSize:36}}>Seasonal Flavors. Timeless Taste.</h1>
            <p style={{color:'var(--muted)'}}>Experience curated dishes made from the freshest local ingredients. Reserve your table today.</p>
            <div style={{marginTop:18}}>
              <a className="btn-primary" href="#reservation">Reserve a table</a>
              <a style={{marginLeft:12}} className="btn-ghost" href="/menu">View Menu</a>
            </div>
          </div>
          <div style={{flex:'1 1 320px'}}>
            <div className="card">
              <img src="/images/hero-food.jpg" alt="Hero food" style={{width:'100%',height:220,objectFit:'cover',borderRadius:8}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}